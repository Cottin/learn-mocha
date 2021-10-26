import * as R from 'ramda'

// Write a program that takes an argument n and returns the sum of the numbers 1 to n (inclusive)
const sum1toN = (n) => {
	return R.pipe(R.range(1), R.sum)(n+1)
}

export default sum1toN


