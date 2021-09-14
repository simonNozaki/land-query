export interface Event {
    title: string,
    happendOn: number
}

export interface HistoricEvent {
    /**
     * 地名、パーティションキー
     */
    land: string,
    /**
     * id、ソートキー
     */
    id: string,
    country: 'JP' | 'FR' | 'US',
    events: Event[],
    createdAt: string,
    updatedAt: string
}