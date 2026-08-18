// @ts-check
/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */

export function totalBirdCount(birdsPerDay) {
    let totalBirds=0;
    for(let i=0;i<birdsPerDay.length;i++){
      totalBirds+=birdsPerDay[i];
    }
    return totalBirds;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let totalBirdsWeek=0;
  const startIndex=(week-1)*7;
  const endIndex=startIndex+7;
  for(let i = startIndex;i<endIndex;i++){
      totalBirdsWeek+=birdsPerDay[i];
  }
  return totalBirdsWeek;
}

export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] += 1;
  }
  return birdsPerDay;
}
