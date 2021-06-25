import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as HowToTriggerLambdaFromSns from '../lib/how-to-trigger-lambda-from-sns-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new HowToTriggerLambdaFromSns.HowToTriggerLambdaFromSnsStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
