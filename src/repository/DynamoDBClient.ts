import { injectable } from "inversify";
import * as AWS from 'aws-sdk'
import { DocumentClient } from "aws-sdk/clients/dynamodb";

AWS.config.update({region: 'ap-northeast-1'})


export interface DynamoDBClient {
    getClient(): DocumentClient
}

/**
 * ローカルDynamoDBクライアント
 */
@injectable()
export class LocalDynamoDBClient implements DynamoDBClient {
    private readonly documentClient: DocumentClient = new AWS.DynamoDB.DocumentClient({
        apiVersion: '',
        endpoint: 'http://localhost:8000'
    })
    
    getClient(): AWS.DynamoDB.DocumentClient {
        return this.documentClient
    }
}