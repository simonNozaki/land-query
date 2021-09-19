import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { injectable } from "inversify";
import { HistoricEvent } from "src/type/HistoricEvent";
import { HistoricEventRepository } from "src/repository/HistoricEventRepository";

/**
 * DynamoDBリポジトリ実装クラス
 */
@injectable()
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