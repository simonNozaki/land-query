import { APIGatewayProxyResult } from "aws-lambda"

/**
 * API Gatewayレスポンス構築クラス
 */
export class ApiGatewayResponse<T> {
    private readonly t: T
    constructor(t: T) {
        this.t = t
    }

    getOk(): APIGatewayProxyResult {
        return this.getResponse(200)
    }

    getBadRequest(): APIGatewayProxyResult {
        return this.getResponse(400)
    }

    private getResponse(statusCode: number): APIGatewayProxyResult {
        return {
            statusCode: statusCode,
            body: JSON.stringify(this.t)
        }
    }
}