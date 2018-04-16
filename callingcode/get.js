const codeTable = require("./codetable.js");

const findByCode = (inputCode) => {
    return codeTable().filter( function extractByCode(x) { return x.callingCode == inputCode }); 
} 

module.exports.get = (event, context, callback) => {
    console.log(`Received event: ${JSON.stringify(event, null, 2)}`);

    let statusCode = 200;
    let body = "";

    let result = findByCode(event.pathParameters.code);

    if(result){
        body = result;
    }else{
        statusCode = 204;
    }

    const response = {
        statusCode: statusCode,
        body: JSON.stringify(body)
      };
    
      callback(null, response);
}