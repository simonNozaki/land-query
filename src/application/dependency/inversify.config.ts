import { Container } from 'inversify'
import { HistoricEventRepository } from 'src/repository/HistoricEventRepository'
import { InMemoryHistoricEventRepository } from 'src/repository/InMemoryHistoricEventRepository'
import { TYPES } from './Types'

export const defaultContainer = new Container()
defaultContainer.bind<HistoricEventRepository>(TYPES.HistoricEventRepository)
    .to(InMemoryHistoricEventRepository)
    .inSingletonScope()