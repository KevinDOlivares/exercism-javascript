// @ts-check

const rateDay = 8;
const daysPerMonth = 22;

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return ratePerHour * rateDay;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget - the total budget
 * @param {number} ratePerHour - the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget /  rateDay * ratePerHour));
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays - number of days the project spans
 * @param {number} discount - for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const dailyRate = ratePerHour * rateDay;
  const fullMonths = Math.floor(numDays / daysPerMonth);
  const remainingDays = numDays % daysPerMonth;

  const discountedMonthlyRate = (dailyRate * daysPerMonth) * (1 - discount);
  const totalCost = (fullMonths * discountedMonthlyRate) + (remainingDays * dailyRate);

  return Math.ceil(totalCost);
}