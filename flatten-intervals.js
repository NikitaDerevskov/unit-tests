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
}

let flattenIntervals = x => {
  let sorted = x.sort((a, b) => startOf(a) - startOf(b))
  return sorted.reduce((acc, y, i) => {
    if (i == 0) {
      let res = flattenIntervals2(y, sorted[i+1])
      return res.length === 1
      ? acc.concat(res)
      : acc.concat(y)
    } else if (i > 0) {
      let res = flattenIntervals2(y, sorted[i-1])
      console.log('YYYY', y)
      console.log('RESS', res[0])
      return acc
    }
  },[])
}

/* */

let a = [[15, 100], [2, 5], [3, 10]]

// console.log(flattenIntervals2([2, 5], [3,10]))
console.log('flattenIntervals', flattenIntervals(a))


module.exports = {
  _sorted2: sorted2,
  _startOf: startOf,
  _endOf: endOf,
  flattenIntervals,
  flattenIntervals2}
