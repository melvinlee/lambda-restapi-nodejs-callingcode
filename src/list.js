"use strict";

const callingCode = require("./calling-code.js");

module.exports.list = (event, context, callback) => {
  console.log(`Received event: ${JSON.stringify(event, null, 2)}`);

  const response = {
    statusCode: 200,
    body: JSON.stringify(callingCode.list())
  };

  callback(null, response);
};