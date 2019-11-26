/**
 *
 */

let sorted2 = (a, b) =>
  startOf(a) > startOf(b)
    ? [b, a]
    : [a, b]

let startOf = ([x, _]) => x
let endOf = ([_, x]) => x

let flattenIntervals2 = (a, b) => {
  let [first, second] = sorted2(a, b)

  return (startOf(second) <= endOf(first))
    ? [[
      Math.min(...[first, second].map(startOf)),
      Math.max(...[first, second].map(endOf))]]
    : [first, second]

  return [first, second]
}

/* */

module.exports = {
  _sorted2: sorted2,
  _startOf: startOf,
  _endOf: endOf,
  /* flattenIntervals, */
  flattenIntervals2}
