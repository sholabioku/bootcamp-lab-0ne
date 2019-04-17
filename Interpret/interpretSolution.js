// This function takes three parameters, the first is a number and the second and third are arrays.
// The second parameter is an array of operations which cold contain one or more of "+", "-", and "*"
// The third array is an arry of numbers which are the second participants in the operations
// If you encounter an unknown command in the second array, return -1.

function compute(result, commands, numbers, commandType){

    if( commands[commandType] === '*') {

        return result * numbers[commandType];

    } else if( commands[commandType] === '+') {

        return result + numbers[commandType];
    } else if( commands[commandType] === '-') {

        return result - numbers[commandType];
    } else {

        return undefined;
    };

};

function interpret(firstNum, commands, numbers){

    let result = firstNum;

    for (let i=2; i< commands.length; i++) {

      result = compute(result, commands, numbers, i);

      if(result === undefined){
           return -1;
        }

    };

    return result;

};

module.exports = interpret;