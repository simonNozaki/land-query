import { HistoricEvent } from "src/type/HistoricEvent"
import { HistoricEventRepository } from "./HistoricEventRepository"
import { v4 } from 'uuid'

const now = new Date().toString()

/**
 * ローカル開発用モックリポジトリ実装クラス
 */
export class InMemoryHistoricEventRepository implements HistoricEventRepository {
    find(): HistoricEvent[] {
        return historicEvents
    }

    findByLand(land: string): HistoricEvent[] {
        return historicEvents.filter(e => e.land === land)
    }
}


const historicEvents: HistoricEvent[] = [
    {
        land: 'tokyo',
        id: v4().toString(),
        country: 'JP',
        events: [
            {
                title: '関東大震災',
                happendOn: 1923
            },
            {
                title: '東京大空襲',
                happendOn: 1944
            },
            {
                title: '東京オリンピック',
                happendOn: 1964
            },
            {
                title: '東京オリンピック',
                happendOn: 2021
            }
        ],
        createdAt: now,
        updatedAt: now
    },
    {
        land: 'normandy',
        id: v4().toString(),
        country: 'FR',
        events: [
            {
                title: 'ノルマンディ上陸作戦',
                happendOn: 1944
            }
        ],
        createdAt: now,
        updatedAt: now
    },
    {
        land: 'washington d.c.',
        id: v4().toString(),
        country: 'US',
        events: [
            {
                title: 'アメリカ同時多発テロ',
                happendOn: 2001
            }
        ],
        createdAt: now,
        updatedAt: now
    }
]
