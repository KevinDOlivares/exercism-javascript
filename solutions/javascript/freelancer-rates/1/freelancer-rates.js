// @ts-check

const hoursPerDay = 8;
const daysPerMonth = 22;
export function dayRate(ratePerHour) {
  return ratePerHour*8;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget/(hoursPerDay*ratePerHour));
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const dailyRate = ratePerHour * hoursPerDay;
  const fullMonths = Math.floor(numDays / daysPerMonth);
  const remainingDays = numDays % daysPerMonth;

  const discountedMonthlyRate = (dailyRate * daysPerMonth) * (1 - discount);
  const totalCost = (fullMonths * discountedMonthlyRate) + (remainingDays * dailyRate);

  return Math.ceil(totalCost);
}
