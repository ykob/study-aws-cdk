import * as cdk from 'aws-cdk-lib';
import 'source-map-support/register';
import { CdkWorkshopStack } from '../lib/cdk-workshop-stack';

const app = new cdk.App();

new CdkWorkshopStack(app, 'CdkWorkshopStack');
