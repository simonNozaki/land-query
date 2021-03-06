import type { AWS } from '@serverless/typescript'

const serverlessConfiguration: AWS = {
  service: 'query-history',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: [
    'serverless-webpack',
    'serverless-offline'
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  functions: {
    'land-query': {
      handler: 'src/handler/LandQueryHandler.execute',
      events: [
        {
          http: {
            method: 'post',
            path: 'land'
          }
        }
      ]
    }
  }
}

module.exports = serverlessConfiguration;
