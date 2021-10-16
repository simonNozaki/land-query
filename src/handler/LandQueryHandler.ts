import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { inject } from 'inversify'
import { ApiGatewayResponse } from '../application/commons/ApiGatewayUtils'
import { HistoricEventRepository } from '../repository/HistoricEventRepository'
import { TYPES } from '../repository/Types'
import { defaultContainer } from '../repository/inversify.config'


/**
 * ハンドラリクエスト仕様
 */
interface HandlerRequest {
    lands: string[]
}


/**
 * 歴史的な地名クエリハンドラ
 * @param event 
 * @returns 
 */
export const execute: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent) => {
    const historicEventRepository: HistoricEventRepository = defaultContainer.get(TYPES.HistoricEventRepository)

    return new Main(event, historicEventRepository).execute()
}


/**
 * ハンドラからよばれるメインクラス
 */
export class Main {
    constructor(
        private event: APIGatewayProxyEvent,
        @inject(TYPES.HistoricEventRepository) private historicEventRepository: HistoricEventRepository
    ) {}

    /**
     * 処理の実行
     * @returns 
     */
    async execute(): Promise<APIGatewayProxyResult> {
        console.info(`リクエスト: ${this.event.body}`)
        const request: HandlerRequest = JSON.parse(this.event.body)

        if (request.lands.length == 0) {
            return new ApiGatewayResponse({
                message: 'e.lands.validation.invalid_array_size'
            }).getBadRequest()
        }

        const results = []
        for (const land of request.lands) {
            const records = await this.historicEventRepository.findByLand(land)
            results.push(records)
        }

        if (results.length == 0) {
            return new ApiGatewayResponse({
                message: 'e.lands.query.no_query_results'
            }).getBadRequest()
        }

        const response = new ApiGatewayResponse({ result: results }).getOk()
        console.info(`レスポンス: ${response.toString()}`)

        return response
    }
}