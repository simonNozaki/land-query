import { injectable } from 'inversify';
import { HistoricEventRepository } from '../../../src/repository/HistoricEventRepository'
import { HistoricEvent } from '../../../src/type/HistoricEvent'

const now = new Date().toString()

/**
 * ベーシックなテスト用モックリポジトリ
 */
@injectable()
export class MockHistoricEventRepository implements HistoricEventRepository {
    find(): Promise<HistoricEvent[]> {
        throw new Error('Method not implemented.');
    }
    findByLand(land: string): Promise<HistoricEvent[]> {
        return new Promise((resolve) => {
            resolve([
                {
                    land: land,
                    id: '',
                    country: 'FR',
                    events: [
                        {
                            title: 'ノルマンディ上陸作戦',
                            happendOn: 1944
                        }
                    ],
                    createdAt: now,
                    updatedAt: now
                }
            ])
        })
    }

}