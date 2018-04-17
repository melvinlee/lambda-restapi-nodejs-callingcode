# REST API Callingcode [![Build Status](https://travis-ci.org/melvinlee/aws-lambda-restapi-callingcode.svg?branch=master)](https://travis-ci.org/melvinlee/aws-lambda-restapi-callingcode)

This API help you find the dialing codes you need to make long distance. 

## Usage

- `GET /callingcode/lookup?number={callingnumber}` - Lookup country detail by speficing calling number
- `GET /callingcode` - List country calling number details
- `GET /callingcode/{code}` - Get Country detail by speficif calling code 

## Quickstart

```sh
$ npm install
```

To deploy endpoint, simple run:

```sh
$ serverless deploy
```

and the expected output:

```sh
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service .zip file to S3 (6.31 MB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
..........................
Serverless: Stack update finished...
Service Information
service: callingcode-restapi-lambda
stage: dev
region: ap-southeast-1
stack: callingcode-restapi-lambda-dev
api keys:
  None
endpoints:
  GET - https://gtqbfqiyha.execute-api.ap-southeast-1.amazonaws.com/dev/callingcode/lookup
  GET - https://gtqbfqiyha.execute-api.ap-southeast-1.amazonaws.com/dev/callingcode
  GET - https://gtqbfqiyha.execute-api.ap-southeast-1.amazonaws.com/dev/callingcode/{code}
functions:
  lookup: callingcode-restapi-lambda-dev-lookup
  list: callingcode-restapi-lambda-dev-list
  get: callingcode-restapi-lambda-dev-get
```