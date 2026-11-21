'use strict';

/**
 * is-even-clone
 * 
 * A simple utility to check whether a number is even.
 * Created as an educational npm package for a college assignment.
 * 
 * @module is-even-clone
 */

/**
 * Checks whether a given number is even.
 *
 * Rules:
 *  - Returns true  if the number is even (divisible by 2 with no remainder).
 *  - Returns false if the number is odd.
 *  - Decimals (e.g. 2.5) are always considered NOT even (returns false).
 *  - Zero (0) is considered even (returns true).
 *  - Negative even numbers return true; negative odd numbers return false.
 *  - Throws a TypeError for any input that is not a finite number
 *    (strings, null, undefined, NaN, Infinity, objects, etc.).
 *
 * @param {number} num - The number to test.
 * @returns {boolean} true if even, false if odd.
 * @throws {TypeError} If the input is not a finite number.
 *
 * @example
 * const isEven = require('is-even-clone');
 * isEven(4);   // true
 * isEven(7);   // false
 * isEven(-2);  // true
 * isEven(0);   // true
 * isEven(2.5); // false  (decimals are never even)
 */
function isEven(num) {
  // Reject anything that is not a number type
  if (typeof num !== 'number') {
    throw new TypeError(
      'is-even-clone: expected a number but received ' + typeof num
    );
  }

  // Reject NaN and Infinity (they are of type "number" but not finite)
  if (!isFinite(num)) {
    throw new TypeError(
      'is-even-clone: expected a finite number but received ' + num
    );
  }

  // Decimal numbers (non-integers) are never even
  if (!Number.isInteger(num)) {
    return false;
  }

  // Core logic: a number is even when dividing by 2 leaves no remainder
  return num % 2 === 0;
}

module.exports = isEven;
