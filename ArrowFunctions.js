// Arrow Functions 
// function getYear(str){
//     return str.split("-")[0];
// }

// //Simplest
// str => str.split("-")[0];

// //Multiple Parameters
// (str) => str.split("-")[0];

// //Mutliple Line of code
// (str) => {str.split("-")[0];}

// //Explicit return statement
// (str) => {return str.split("-")[0];}

//Make the function usable
const getYear = (str) => {return str.split("-")[0];}

const output = `This is a awsome year: ${getYear("1957-10-9")} to be alive.`;
output;

// Short Circuting Operators
const andTrue = true && "Always return the second value.";
andTrue;
const orFalse = false || "Always return the second value.";
orFalse;

// Will not look for second value.
const andFalse = false && "Always return the second value.";
andFalse;
const orTrue= true || "Always return the second value.";
orTrue;

// Knowledge Collesing Operator.
const data = undefined ?? "Returned second value because the first one was null or undefined";
data;

//Optional Chaining 
// object.children?secondChild;

//The chain only continues if the previous term is not undefined.
//Can use knowledge collesing operation for the above case.