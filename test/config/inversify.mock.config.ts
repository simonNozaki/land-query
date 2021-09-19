import { Container } from 'inversify'
import { HistoricEventRepository } from 'src/repository/HistoricEventRepository'
import { MockHistoricEventRepository } from 'test/land-query/repository/MockHistoricEventRepository'
import { TYPES } from 'src/application/dependency/Types'

// ベーシックなモック用コンテナ
export const mockMainContainer = new Container()
mockMainContainer.bind<HistoricEventRepository>(TYPES.HistoricEventRepository)
    .to(MockHistoricEventRepository)
    .inSingletonScope()