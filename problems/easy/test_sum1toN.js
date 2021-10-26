import assert from 'assert'
import sum1toN from './sum1toN.js'

describe("sum1toN", () => {
  it("3", () => assert.strictEqual(sum1toN(3), 6))
  it("4", () => assert.strictEqual(sum1toN(4), 10))
  it("9", () => assert.strictEqual(sum1toN(9), 45))
  it("80", () => assert.strictEqual(sum1toN(80), 3240))
  it("231", () => assert.strictEqual(sum1toN(231), 26796))
  it("4021", () => assert.strictEqual(sum1toN(4021), 8086231))
})

