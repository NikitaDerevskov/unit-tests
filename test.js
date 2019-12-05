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

/* merge */

for (let [input, expected] of [
  /* When no intersection, then do absurd. */
  [[[1, 2], [3, 4]], [1, 4]],
  /* When second is included to the first. */
  [[[1, 4], [2, 3]], [1, 4]],
  /* When they are slightly intersected. */
  [[[1, 3], [2, 5]], [1, 5]],
  /* They are adjacent. */
  [[[1, 3], [3, 7]], [1, 7]],
]) {
  test('merge', testf(m._merge), input, expected)
}

/* flattenIntervals */

for (let [input, expected] of [

  // empty list of intervals
  [Array.of([]),
   []
  ],

  // a single interval
  [Array.of([[1, 5]]),
   [[1, 5]]
  ],

  // 1 and 2 are intersected
  [Array.of([[2, 5], [15, 20], [15, 25]]),
    [[2, 5], [15, 25]]
  ],

  // 0 and 1 are anti-sorted
  [Array.of([[4, 6], [1, 3], [15, 25]]),
   [[1, 3], [4, 6], [15, 25]]
  ],

  // 0 and 1 are intersected
  [Array.of([[1, 5], [2, 4], [15, 25]]),
   [[1, 5], [15, 25]]
  ],

  // 0 is included in 1
  [Array.of([[4, 6], [2, 8], [15, 25]]),
   [[2, 8], [15, 25]]
  ],

  // no intersections
  [Array.of([[1, 2], [3, 4], [15, 25]]),
   [[1, 2], [3, 4], [15, 25]]
  ],

  // (1 and 2) share their starts
  [Array.of([[1, 2], [3, 4], [3, 8]]),
   [[1, 2], [3, 8]]
  ],

  // 1 contains 2
  [Array.of([[1, 2], [3, 12], [6, 7]]),
   [[1, 2], [3, 12]]
  ],
]) {
  test('flattenIntervals', testf(m.flattenIntervals), input, expected)
}
