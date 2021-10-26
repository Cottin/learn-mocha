
// Write a function that returns the odd numbers in a given list.
// eg. [1, 2, 3, 4, 5] -> [1, 3, 5]

const odd = (xs) => {
	// Your code here...
	return xs.filter(x => x % 2 !== 0)
}


export default odd

