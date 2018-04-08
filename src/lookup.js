"use strict";

const callingCode = require("./calling-code.js");

module.exports.lookup = (event, context, callback) => {
  let statusCode = 200;
  let body = "";
  let inputNumber;

  console.log(`Received event: ${JSON.stringify(event, null, 2)}`);
  if (
    event.queryStringParameters !== null &&
    event.queryStringParameters !== undefined
  ) {
    if (
      event.queryStringParameters.number !== undefined &&
      event.queryStringParameters.number !== null &&
      event.queryStringParameters.number !== ""
    ) {
      inputNumber = event.queryStringParameters.number;
    }
  }

  if (inputNumber !== undefined) {
    body = callingCode.lookup(inputNumber);
  } else {
    statusCode = 400;
    body = { error: "Number is required!" };
  }

  const response = {
    statusCode: statusCode,
    body: JSON.stringify(body)
  };

  callback(null, response);
};

module.exports.list = (event, context, callback) => {
  console.log(`Received event: ${JSON.stringify(event, null, 2)}`);

  const response = {
    statusCode: 200,
    body: JSON.stringify(callingCode.list())
  };

  callback(null, response);
};