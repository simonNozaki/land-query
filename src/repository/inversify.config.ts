import { Container } from 'inversify'
import { HistoricEventRepository } from './HistoricEventRepository'
import { InMemoryHistoricEventRepository } from './InMemoryHistoricEventRepository'
import { TYPES } from './Types'

export const defaultContainer = new Container()
defaultContainer.bind<HistoricEventRepository>(TYPES.HistoricEventRepository)
    .to(InMemoryHistoricEventRepository)
    .inSingletonScope()