import { APIGatewayProxyEvent } from 'aws-lambda'


export class APIGatewayEventGenerator {
    private event: APIGatewayProxyEvent = {
        body: null,
        path: 'land',
        headers: {
            Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate, lzma, sdch, br',
            'Accept-Language': 'en-US,en;q=0.8',
            'CloudFront-Forwarded-Proto': 'https',
            'CloudFront-Is-Desktop-Viewer': 'true',
            'CloudFront-Is-Mobile-Viewer': 'false',
            'CloudFront-Is-SmartTV-Viewer': 'false',
            'CloudFront-Is-Tablet-Viewer': 'false',
            'CloudFront-Viewer-Country': 'US',
            Host: 'wt6mne2s9k.execute-api.us-west-2.amazonaws.com',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.82 Safari/537.36 OPR/39.0.2256.48',
            Via: '1.1 fb7cca60f0ecd82ce07790c9c5eef16c.cloudfront.net (CloudFront)',
            'X-Amz-Cf-Id': 'nBsWBOrSHMgnaROZJK1wGCZ9PcRcSpq_oSXZNQwQ10OTZL4cimZo3g==',
            'X-Forwarded-For': '192.168.100.1, 192.168.1.1',
            'X-Forwarded-Port': '443',
            'X-Forwarded-Proto': 'https'
        },
        requestContext: {
            accountId: '123456789012',
            resourceId: 'us4z18',
            stage: 'test',
            requestId: '41b45ea3-70b5-11e6-b7bd-69b5aaebc7d9',
            identity: {
                accessKey: '',
                apiKeyId: '',
                cognitoIdentityPoolId: '',
                accountId: '',
                cognitoIdentityId: '',
                caller: '',
                apiKey: '',
                sourceIp: '192.168.100.1',
                cognitoAuthenticationType: '',
                cognitoAuthenticationProvider: '',
                userArn: '',
                userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.82 Safari/537.36 OPR/39.0.2256.48',
                user: '',
                principalOrgId: '',
                clientCert: null
            },
            path: '',
            requestTimeEpoch: 0,
            resourcePath: '/{proxy+}',
            httpMethod: 'GET',
            apiId: 'wt6mne2s9k',
            authorizer: {},
            protocol: ''
        },
        pathParameters: {},
        queryStringParameters: {},
        stageVariables: {},
        multiValueHeaders: {},
        isBase64Encoded: false,
        multiValueQueryStringParameters: {},
        resource: '/{proxy+}',
        httpMethod: 'GET'
    }

    getEvent<T>(body: T) {
        this.event.body = JSON.stringify(body)
        return this.event
    }
}