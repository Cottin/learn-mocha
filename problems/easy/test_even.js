import assert from 'assert'
import even from './even.js'

describe("even", () => {
  it("[2, 3, 4]", () => assert.deepEqual(even([2, 3, 4]), [2, 4]))
})

