import { TYPES } from "src/application/dependency/Types"
import { Main } from "src/handler/LandQueryHandler"
import { HistoricEventRepository } from "src/repository/HistoricEventRepository"
import { APIGatewayEventGenerator } from "test/APIGatewayEventGenerator"
import { mockMainContainer } from "test/config/inversify.mock.config"

describe('LandQueryHandler', () => {
    it('should fetch all events with a mock', () => {
        // リクエストの初期化
        const req = { lands: ['normandy'] }
        const event = new APIGatewayEventGenerator().getEvent(req)
        const mockHistoricEventRepository = mockMainContainer.get<HistoricEventRepository>(TYPES.HistoricEventRepository)

        // 実行
        const actual = new Main(event, mockHistoricEventRepository).execute()

        // アサーション
        const body = JSON.parse(actual.body)
        expect(actual.statusCode).toBe(200)
        expect(body.result[0][0].land).toBe('normandy')
        expect(body.result[0][0].country).toBe('FR')
    })
})