import { HistoricEvent } from 'src/type/HistoricEvent'

/**
 * 歴史的な出来事リポジトリ
 */
export interface HistoricEventRepository {
    /**
     * すべての歴史的な出来事を返す
     */
    find(): HistoricEvent[]

    /**
     * 地名で出来事を検索する
     * @param land 
     */
    findByLand(land: string): HistoricEvent[]
}