import * as m from './flatten-intervals'

import test from 'ava'

/* */

let testf = f => {
  let macro = (t, input, expected) =>
    t.deepEqual(f(input), expected)

  macro.title =
    (f = '', input, expected) =>
      `${f}(${input}) -> ${expected}`

  return macro
}

for (let [input, expected] of [
  [[1, 2], 1],
  [[2, 1], 2],
  [[3], 3],
  [[], undefined]
]) {
  test('startOf', testf(m._startOf), input, expected)
}

for (let [input, expected] of [
  [[1, 2], 2],
  [[2, 1], 1],
  [[1, 1], 1],
  [[3], undefined],
  [[], undefined]
]) {
  test('endOf', testf(m._endOf), input, expected)
}

/* flattenIntervals2 */

test.skip('flatten intervals for two args', t => {
  t.deepEqual(m.flattenIntervals2(), )
  t.deepEqual(m.flattenIntervals2(), )
})
