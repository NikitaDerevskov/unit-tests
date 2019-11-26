import {f} from './flatten-intervals'

import test from 'ava'

test('f returns true', t => {
  t.is(f(), true)
})
