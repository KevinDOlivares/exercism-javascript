//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const enOrdinalRules = new Intl.PluralRules("en-US", { type: "ordinal" });
const suffixes = new Map([
  ["one", "st"],
  ["two", "nd"],
  ["few", "rd"],
  ["other", "th"],
])
export const format = (name, n) => {
  const rule = enOrdinalRules.select(Number(n));
  const suffix = suffixes.get(rule);
  return `${name}, you are the ${n}${suffix} customer we serve today. Thank you!`;
};
