import { inject, injectable } from "inversify";
import { HistoricEvent } from "src/type/HistoricEvent";
import { HistoricEventRepository } from "src/repository/HistoricEventRepository";
import { DynamoDBClient } from "./DynamoDBClient";
import { TYPES } from "./Types";

/**
 * DynamoDBリポジトリ実装クラス
 */
@injectable()
export class DynamoDbHistoricEventRepository implements HistoricEventRepository {
    constructor(
        @inject(TYPES.DynamoDBClient) private dynamodbClient: DynamoDBClient
    ) {}

    async find(): Promise<HistoricEvent[]> {
        const client = this.dynamodbClient.getClient()

        const records = await client.scan({
            TableName: 'local-historic-events'
        }).promise()

        return records.Items as HistoricEvent[]
    }

    async findByLand(land: string): Promise<HistoricEvent[]> {
        throw new Error("Method not implemented.");
    }

}