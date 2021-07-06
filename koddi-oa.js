/*
	Given a matrix and two variables k and z, find the sum of a single path that is equal to z and the path with the greatest sum larger than k. If both of these conditions are true, return true, else false.
	A path can go in any direction, but cannot overlap itself and must start in the top left and end in the bottom right corner.

	input:
	matrix = [
		[1,  3, 6],
		[12,-31,1],
		[12,-3, 5],
	]

	k = 12
	z = -12

	answer: true

	In the example below, I've put the answer to path with the greatest sum in with asterisk for a visual representation.

	matrix = [
		[*-1, *3, *6],
		[-22,-31, *1],
		[11, 13,  *4]
	]

	Explanation:
	Because the largest sum in the matrix = 13 (-1 + 3 + 6 + 1 + 4) which is greater than k(12) and
	there is one path that sums to -12 and consists of (-1 + 3 + -31 + 13 + 4). For the matrix provided above the two conditions are met, therefore the answer is true.

	Feel free to solve this problem in your programming language of choice. The expected results for each of the matrices are listed next to each.
	For example, your algorithm should give the following results:
		maxPathInMatrix(matrix1, 12, -12) => true
 		maxPathInMatrix(matrix2, 352, 3) => true
 		maxPathInMatrix(matrix3, 200, 14) => false
*/


const matrix1 = [// expected: true when k = 12 and z = -12
	[-1 , 3, 6],
	[-22,-31, 1],
	[11, 13, 4],
];

const matrix2 = [// expected: true when k = 352 and z = 3
	[-1 , 3, 6],
	[-22,-31, 18],
	[11, 13, 64],
	[-1 , 34, 56],
	[-31 , -13, 6],
	[-61 , 39, 6],
	[-81 , 93, 6],
];

const matrix3 = [// expected: false when k = 200 and z = 14
	[-1 , 3, 7],
	[-22,-31, 1],
	[11, 13, 4],
	[-11, 136, 4],
];

function maxPathInMatrix(matrix, k, z) {
	// Write your code here

	console.log(matrix, k, z);
}

const resultTest1 = maxPathInMatrix(matrix1, 12, -12);// true
console.log(
	resultTest1 ? 'Correct: test case passed' : 'Failed to pass test case'
);

const resultTest2 = maxPathInMatrix(matrix2, 352, 3);// true
console.log(
	resultTest2 ? 'Correct: test case passed' : 'Failed to pass test case'
);

const resultTest3 = maxPathInMatrix(matrix3, 200, 14);// false
console.log(
	!resultTest3 && typeof resultTest3 !== 'undefined' ? 'Correct: test case passed' : 'Failed to pass test case'
);