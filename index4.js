"use strict";
// V - 1 (окрема обробка number та bigint)
// /**
//  *
//  * @param {number, bigint} value
//  * @returns
//  */
// function getPowerNumberRecursion(value) {
//   if (typeof value === "number") {
//     if (typeof value !== "number") {
//       throw new TypeError("Change the type to a number or bigint");
//     }
//     if (value < 0 || value > Number.MAX_SAFE_INTEGER || Number.isInteger(value) === false) {
//       throw new RangeError(
//         "Change to positive, integer less than 9007199254740991"
//       );
//     }
//     if (value === 0) {
//       return 1;
//     }
//     if (value === 1) {
//       return value;
//     }
//     return value * getPowerNumberRecursion(value - 1);
//   } else {
//     if (typeof value !== "bigint") {
//       throw new TypeError("Change the type to a number or bigint");
//     }
//     if (
//       value < 0n
//     ) {
//       throw new RangeError(
//         "Change to positive, integer less than 9007199254740991"
//       );
//     }
//     // if (BigInt.isInteger(value) === false){
//     //   throw new SyntaxError('Number must be an integer')
//     // }
//     if (value === 0n) {
//       return 1n;
//     }
//     if (value === 1n) {
//       return value;
//     }
//     return value * getPowerNumberRecursion(value - 1n);
//   }
// }

//  V - 2 

/**
 *
 * @param {number, bigint} value
 * @returns
 */
function getPowerNumberRecursion(value) {
  if (typeof value !== "number" && typeof value !== "bigint") {
    throw new TypeError("Change the type to a number or bigint");
  }
  if (typeof value === "number") {
    if (value < 0 || value > Number.MAX_SAFE_INTEGER || Number.isInteger(value) === false) {
      throw new RangeError(
        "Change to positive, integer less than 9007199254740991"
      );
    }
  } else if (value < 0n) {
    throw new RangeError(
      "Change to positive, integer less than 9007199254740991"
    )
  }
    if (value === 0 || value === 0n) {
      return 1;
    }
    if (value === 1 || value === 1n) {
      return value;
    }
  let variable;
  if (typeof value === "bigint") {
    variable = 1n
  } else {
    variable = 1
  }
  
  return value * getPowerNumberRecursion(value - variable);
}

try {
  console.log(getPowerNumberRecursion(5n));
} catch (error) { 
    alert(error.message)
}

console.log("more code");
