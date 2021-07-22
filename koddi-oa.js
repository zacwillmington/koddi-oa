/*
	You are given a matrix and two variables `greaterThan` and `equalTo`. Your task is to traverse the matrix finding one sum of a single path that is equal to `equalTo`. You must also find a different path with a sum larger than `greaterThan`. If both of these conditions are true, return true, else false.
	A path can go in any direction, but cannot overlap itself and must start in the top left and end in the bottom right corner. The allowed moves are: up, down, left and right.

	input:
	matrix = [
		[1,  3, 6],
		[12,-31,1],
		[12,-3, 5],
	]

	greaterThan = 12
	equalTo = -12

	answer: true

	In the example below, I've put the answer to path with the greatest sum with asterisk for a visual representation.
	matrix = [
		[*-1, *3, *6],
		[-22,-31, *1],
		[11, 13,  *4]
	]

	Using the same matrix from the example above, I've put the answer to path with the sum equal to `equalTo` with asterisk for a visual representation.
	matrix = [
		[*-1, *3, 6],
		[-22,*-31, 1],
		[11, *13,  *4]
	]

	Explanation:
	Because the largest sum in the matrix = 13 (-1 + 3 + 6 + 1 + 4) which is greater than greaterThan(12) and
	there is one path that sums to -12 and consists of (-1 + 3 + -31 + 13 + 4). For the matrix provided above the two conditions are met, therefore the answer is true.

	Feel free to solve this problem in your programming language of choice. The expected results for each of the matrices are listed next to each.
	For example, your algorithm should give the following results:
		matrixHasValidPaths(matrix1, 12, -12) => true
 		matrixHasValidPaths(matrix2, 352, 3) => true
 		matrixHasValidPaths(matrix3, 200, 14) => false
*/


const matrix1 = [// expected: true when greaterThan = 12 and equalTo = -12
	[-1 , 3, 6],
	[-22,-31, 1],
	[11, 13, 4],
];

const matrix2 = [// expected: true when greaterThan = 352 and equalTo = 3
	[-1 , 3, 6],
	[-22,-31, 18],
	[11, 13, 64],
	[-1 , 34, 56],
	[-31 , -13, 6],
	[-61 , 39, 6],
	[-81 , 93, 6],
];

const matrix3 = [// expected: false when greaterThan = 200 and equalTo = 14
	[-1 , 3, 7],
	[-22,-31, 1],
	[11, 13, 4],
	[-11, 136, 4],
];

function matrixHasValidPaths(matrix, greaterThan, equalTo) {
	// Write your code here
}

const resultTest1 = matrixHasValidPaths(matrix1, 12, -12);// true
console.log(
	resultTest1 ? 'Correct: test case passed' : 'Failed to pass test case'
);

const resultTest2 = matrixHasValidPaths(matrix2, 352, 3);// true
console.log(
	resultTest2 ? 'Correct: test case passed' : 'Failed to pass test case'
);

const resultTest3 = matrixHasValidPaths(matrix3, 200, 14);// false
console.log(
	!resultTest3 && typeof resultTest3 !== 'undefined' ? 'Correct: test case passed' : 'Failed to pass test case'
);