import { Container } from 'inversify'
import { HistoricEventRepository } from '../../src/repository/HistoricEventRepository'
import { TYPES } from '../../src/repository/Types'
import { MockHistoricEventRepository } from '../land-query/repository/MockHistoricEventRepository'

// ベーシックなモック用コンテナ
export const mockMainContainer = new Container()
mockMainContainer.bind<HistoricEventRepository>(TYPES.HistoricEventRepository)
    .to(MockHistoricEventRepository)
    .inSingletonScope()