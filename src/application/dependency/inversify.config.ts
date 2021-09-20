import { Container } from 'inversify'
import { HistoricEventRepository } from '../../repository/HistoricEventRepository'
import { InMemoryHistoricEventRepository } from '../../repository/InMemoryHistoricEventRepository'
import { TYPES } from './Types'

export const defaultContainer = new Container()
defaultContainer.bind<HistoricEventRepository>(TYPES.HistoricEventRepository)
    .to(InMemoryHistoricEventRepository)
    .inSingletonScope()