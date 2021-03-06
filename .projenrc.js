const { AwsCdkTypeScriptApp } = require('projen');
const project = new AwsCdkTypeScriptApp({
  cdkVersion: '1.129.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-pipelines-template',

  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/pipelines',
    '@aws-cdk/aws-codecommit',
  ], /* Which AWS CDK modules (those that start with "@aws-cdk/") this app uses. */
  deps: [
    'chalk',
  ], /* Runtime dependencies of this module. */
  // description: undefined,      /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                 /* Build dependencies for this module. */
  // packageName: undefined,      /* The "name" in package.json. */
  // release: undefined,          /* Add release management to this project. */
  context: {
    '@aws-cdk/core:newStyleStackSynthesis': true,
    'gitType': 'github',
    'repoString': 'owner/org',
    'branch': 'master',
    'githubToken': 'atcl/jingood2/github-token',

  },
});
project.synth();