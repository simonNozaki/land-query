import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { inject } from 'inversify'
import { ApiGatewayResponse } from '../application/commons/ApiGatewayUtils'
import { HistoricEventRepository } from '../repository/HistoricEventRepository'
import { TYPES } from '../application/dependency/Types'
import { defaultContainer } from '../application/dependency/inversify.config'


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
    const historicEventRepository = defaultContainer.get<HistoricEventRepository>(TYPES.HistoricEventRepository)

    return new Main(event, historicEventRepository).execute()
}


/**
 * ハンドラからよばれるメインクラス
 */
export class Main {
    private event: APIGatewayProxyEvent
    historicEventRepository: HistoricEventRepository
    constructor(
        event: APIGatewayProxyEvent,
        @inject(TYPES.HistoricEventRepository) historicEventRepository: HistoricEventRepository
    ) {
        this.event = event
        this.historicEventRepository = historicEventRepository
    }

    /**
     * 処理の実行
     * @returns 
     */
    execute(): APIGatewayProxyResult {
        console.info(`リクエスト: ${this.event.body}`)
        const request: HandlerRequest = JSON.parse(this.event.body)

        if (request.lands.length == 0) {
            return new ApiGatewayResponse({
                message: 'e.lands.validation.invalid_array_size'
            }).getBadRequest()
        }

        const results = []
        for (const land of request.lands) {
            const records = this.historicEventRepository.findByLand(land)
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