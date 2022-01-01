import { HistoricEvent } from "src/type/HistoricEvent";
import { HistoricEventRepository } from "../../../src/repository/HistoricEventRepository";

/**
 * モックエラーイベントリポジトリ実装クラス
 */
export class MockErrorHistoricEventRepository implements HistoricEventRepository {
    find(): Promise<HistoricEvent[]> {
        throw new Error("Method not implemented.");
    }
    findByLand(land: string): Promise<HistoricEvent[]> {
        console.log(`キー => ${land}`)
        throw new Error('モックオブジェクトのエラーです');
    }
}