/**
 *
 */

let startOf = ([x, _]) => x
let endOf = ([_, x]) => x

let sorted2 = (a, b) =>
  startOf(a) > startOf(b)
    ? [b, a]
    : [a, b]

let merge = (a, b) => [
      Math.min(...[a, b].map(startOf)),
      Math.max(...[a, b].map(endOf))]

let flattenIntervals = x => {
  let sorted = x.sort((a, b) => startOf(a) - startOf(b))

  let step = (res, [f, s, ...rest]) => {
    if (!s) return [...res, f]
    return endOf(f) >= startOf(s)
    ? step(res, [merge(f, s), ...rest])
    : step([...res, f], [s,...rest])
  }

  return step([], sorted)
}

/* */

module.exports = {
  _sorted2: sorted2,
  _startOf: startOf,
  _endOf: endOf,
  _merge: merge,
  flattenIntervals}
