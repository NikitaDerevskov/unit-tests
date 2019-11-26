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
    let res = flattenIntervals2(y , acc[acc.length - 1] || y)
    let result = endOf(res) != undefined ? res[1] : res[0]

    if (i != 0 ) {
      let fn = () => {
        acc[acc.length - 1] = result
        return acc
      }

    return endOf(result) !=- endOf(acc[acc.length - 1])
    && startOf(acc[acc.length - 1]) + endOf(acc[acc.length - 1]) > startOf(result)
    ? fn()
    : acc.concat([y])
    } else {
      return acc.concat([res[0]])
    }
  }, [])
}

/* */

module.exports = {
  _sorted2: sorted2,
  _startOf: startOf,
  _endOf: endOf,
  flattenIntervals,
  flattenIntervals2}
