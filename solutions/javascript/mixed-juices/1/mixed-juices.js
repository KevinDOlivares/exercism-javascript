// @ts-check
/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
const juiceTimes = {
  'Pure Strawberry Joy': 0.5,
  'Energizer': 1.5,
  'Green Garden': 1.5,
  'Tropical Island': 3,
  'All or Nothing': 5,
};

export function timeToMixJuice(name) {
  return juiceTimes[name] ?? 2.5;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  const limeWedges = { small: 6, medium: 8, large: 10 };
  let i = 0;
  while (wedgesNeeded > 0 && i < limes.length) {
    wedgesNeeded -= limeWedges[limes[i]];
    i++;
  }
  return i;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let i = 0;
  while (timeLeft > 0 && i < orders.length) {
    timeLeft -= timeToMixJuice(orders[i]);
    i++;
  }
  return orders.slice(i);
}