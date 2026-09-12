// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const array1Join=Number(array1.join(''));
  const array2Join=Number(array2.join(''));
  return array1Join+array2Join;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const text = String(value);
  const invertedText = text.split('').reverse().join('');
  return text===invertedText;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if(!input){
    return 'Required field';
  }
  return Number(input) ? '':'Must be a number besides 0';
}
