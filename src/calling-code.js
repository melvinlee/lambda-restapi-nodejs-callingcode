const countrycodes = require('./calling-code-data.js');

module.exports.lookup = (number) => {
    let sortcallingCodeDesc =  countrycodes().sort((a,b) => b.callingCode.length - a.callingCode.length);
    let found = [];
    let cleanNumber = number.replace("+","").replace(" ","");

    for(let x of sortcallingCodeDesc){

        if (x.callingCode == cleanNumber.substring(0,x.callingCode.length))
        {
            found = x;
            break;
        }
    }

    let {name, callingCode} = found;
    return {callingNumber: number, country: name, code: callingCode};
}

module.exports.list = () => {
    return countrycodes();
}