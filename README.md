# Dafa Mailer

Dafa service responsible for creating Event Warnings and sending warning e-mails

## Logging

To run the live logging in a terminal:<br/>

> npm run log

## Configuring the Serverless Framework

This server has been configured to be deployed with the `Serverless Framework CLI`. An AWS Account and Node.js v8+ are required.<br/>

In the terminal, execute:<br/>

> npm install -g serverless<br/>
> serverless login<br/>

Configure your serverless framework using your [AWS Credentials](https://www.youtube.com/watch?v=tgb_MRVylWw).<br/>

Serverless npm package should be installed globally

## Deploy

If the configuration above has already been completed, the only thing you need to do to deploy to the dev/qa/prod environment is:<br/>

> npm run deploy

## Disabling Lambda Function

Set the function to `enabled: false` in `serverless.yml` and redeploy
