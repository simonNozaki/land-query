import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { HistoricEvent } from "src/type/HistoricEvent";
import { HistoricEventRepository } from "./HistoricEventRepository";

/**
 * DynamoDBリポジトリ実装クラス
 */
export class DynamoDbHistoricEventRepository implements HistoricEventRepository {
    private documentClient: DocumentClient
    constructor(documentClient: DocumentClient) {
        this.documentClient = documentClient
    }

    find(): HistoricEvent[] {
        throw new Error("Method not implemented.");
    }
    findByLand(land: string): HistoricEvent[] {
        throw new Error("Method not implemented.");
    }

}