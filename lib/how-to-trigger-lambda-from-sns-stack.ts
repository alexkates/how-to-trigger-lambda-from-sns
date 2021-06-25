import * as cdk from '@aws-cdk/core';
import * as sns from '@aws-cdk/aws-sns';
import * as lambda from '@aws-cdk/aws-lambda';
import * as lambdaEventSources from '@aws-cdk/aws-lambda-event-sources';

export class HowToTriggerLambdaFromSnsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const topic = new sns.Topic(this, 'OurSnsTopic', {
      displayName: 'Our SNS Topic',
    });

    const lambdaFunction = new lambda.Function(this, 'Function', {
      code: lambda.Code.fromAsset('src'),
      handler: 'index.handler',
      functionName: 'SnsMessageHandler',
      runtime: lambda.Runtime.NODEJS_12_X,
    });

    const eventSource = new lambdaEventSources.SnsEventSource(topic);

    lambdaFunction.addEventSource(eventSource);
  }
}