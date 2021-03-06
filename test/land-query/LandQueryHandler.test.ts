import { Main } from '../../src/handler/LandQueryHandler'
import { HistoricEventRepository } from '../../src/repository/HistoricEventRepository'
import { TYPES } from '../../src/repository/Types'
import { APIGatewayEventGenerator } from '../APIGatewayEventGenerator'
import { mockMainContainer } from '../config/inversify.mock.config'
import { MockErrorHistoricEventRepository } from './repository/MockErrorHistoricEventRepository'

describe('LandQueryHandler', () => {
    it('should fetch all events with a mock', async () => {
        // リクエストの初期化
        const req = { lands: ['normandy'] }
        const event = new APIGatewayEventGenerator().getEvent(req)
        const mockHistoricEventRepository: HistoricEventRepository = mockMainContainer.get(TYPES.HistoricEventRepository)

        // 実行
        const actual = await new Main(event, mockHistoricEventRepository).execute()

        // アサーション
        const body = JSON.parse(actual.body)
        expect(actual.statusCode).toBe(200)
        expect(body.result[0][0].land).toBe('normandy')
        expect(body.result[0][0].country).toBe('FR')
    })

    it('should handle error on getting database and respond as zero', async () => {
        const req = { lands: ['normandy'] }
        const event = new APIGatewayEventGenerator().getEvent(req)

        const actual = await new Main(event, new MockErrorHistoricEventRepository()).execute()

        const body = JSON.parse(actual.body)
        expect(actual.statusCode).toBe(400)
        expect(body.message).toBe('e.lands.query.no_query_results')
    })
})