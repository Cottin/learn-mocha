import * as R from 'ramda'


// Write a program that takes an argument n and returns the sum of the numbers 1 to n (inclusive) but only 
// multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17
const sum1toN3and5 = (n) => {
	// Your code here...
	return R.pipe(R.range(1), R.filter(x => x % 3 === 0 || x % 5 === 0), R.sum)(n+1)
}


export default sum1toN3and5



