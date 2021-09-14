import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { ApiGatewayResponse } from 'src/application/commons/ApiGatewayUtils'
import { HistoricEventRepository } from 'src/repository/HistoricEventRepository'
import { InMemoryHistoricEventRepository } from 'src/repository/InMemoryHistoricEventRepository'

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
    const historicEventRepository = new InMemoryHistoricEventRepository()

    return onHandlerCalled(event, historicEventRepository)
}


const onHandlerCalled = (event: APIGatewayProxyEvent, historicEventRepository: HistoricEventRepository): APIGatewayProxyResult => {
    const request: HandlerRequest = JSON.parse(event.body)

    if (request.lands.length == 0) {
        return new ApiGatewayResponse({
            message: 'e.lands.validation.invalid_array_size'
        }).getBadRequest()
    }

    const results = []
    for (const land of request.lands) {
        const records = historicEventRepository.findByLand(land)
        results.push(records)
    }

    if (results.length == 0) {
        return new ApiGatewayResponse({
            message: 'e.lands.query.no_query_results'
        }).getBadRequest()
    }

    return new ApiGatewayResponse({ result: results }).getOk()
}