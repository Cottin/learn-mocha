import * as R from 'ramda'

// Write a function that computes the running total of a list.
const totalList = (xs) => {
	return R.pipe(R.sum)(xs)
}


export default totalList

