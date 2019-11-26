import * as m from './flatten-intervals'

import test from 'ava'

/* */

let testf = f => {
  let macro = (t, input, expected) =>
    t.deepEqual(f(...input), expected)

  macro.title =
    (f = '', input, expected) =>
      `${f}(${input}) -> ${expected}`

  return macro
}

for (let [input, expected] of [
  [[[1, 2]], 1],
  [[[2, 1]], 2],
  [[[3]], 3],
  [[[]], undefined]
]) {
  test('startOf', testf(m._startOf), input, expected)
}

for (let [input, expected] of [
  [[[1, 2]], 2],
  [[[2, 1]], 1],
  [[[1, 1]], 1],
  [[[3]], undefined],
  [[[]], undefined]
]) {
  test('endOf', testf(m._endOf), input, expected)
}

/* flattenIntervals2 */

for (let [input, expected] of [
  /* When no intersection, then do nothing. */
  [[[1, 2], [3, 4]], [[1, 2], [3, 4]]],
  /* When second is included to the first. */
  [[[1, 4], [2, 3]], [[1, 4]]],
  /* When they are slightly intersected. */
  [[[1, 3], [2, 5]], [[1, 5]]],
  /* They are adjacent. */
  [[[1, 3], [3, 7]], [[1, 7]]],
]) {
  test('flattenIntervals2', testf(m.flattenIntervals2), input, expected)
}

/* flattenIntervals */

for (let [input, expected] of [
  /*  */
  [[[[2, 5], [3, 10]]], [[2, 10]]]
]) {
  test('flattenIntervals2', testf(m.flattenIntervals), input, expected)
}
