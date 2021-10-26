import * as R from 'ramda'

// Write a program that takes an argument n and returns the product of 1,…,n.
const prod1toN = (n) => {
	// Your code here...
	return R.pipe(R.range(1), R.product)(n+1)
}

export default prod1toN


