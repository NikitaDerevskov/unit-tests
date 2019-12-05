/**
 *
 */

let empty = xs => xs.length === 0

let startOf = ([x, _]) => x
let endOf = ([_, x]) => x

let merge = (a, b) => [
      Math.min(...[a, b].map(startOf)),
      Math.max(...[a, b].map(endOf))]

let flattenIntervals = x => {
  /* Sort intervals by their starts.*/
  let sorted = x.sort((a, b) => startOf(a) - startOf(b))

  let step = (acc, [f, s, ...rest]) => {
    if (!s) return [...acc, f] // f is the last
    return endOf(f) >= startOf(s) // when instersect
      ? step(acc, [merge(f, s), ...rest])
      : step([...acc, f], [s,...rest])
  }

  return empty(sorted)
    ? []
    : step([], sorted)
}

/* */

module.exports = {
  _startOf: startOf,
  _endOf: endOf,
  _merge: merge,
  flattenIntervals}
