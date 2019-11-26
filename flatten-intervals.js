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
  debugger
  let [first, second] = sorted2(a, b)

  return [first, second]
}

/* */

module.exports = {
  _sorted2: sorted2,
  _startOf: startOf,
  _endOf: endOf,
  /* flattenIntervals, */
  flattenIntervals2}
