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
	// Solution
	let largestSum = matrix[0][0];
	let found = false;

	function rec(row, col, matrix, currentPathSum) {
		// If we somehow are out of bounds, exit the callstack/go backwards
		if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[row].length) {
			return;
		}

		const currentValue = matrix[row][col];
		currentPathSum += currentValue;

		if (currentValue == "$") return;// In this case we've visited

		const reachedEnd = (row == matrix.length - 1 && col === matrix[row].length - 1);
		if (reachedEnd) {// At the bottom right corner
			if (currentPathSum === equalTo) {// We are hoping to find at least one path the sums to exactly 'z'. This will force the algorithm to explore every possible path.
				found = true;
			}

			largestSum = Math.max(currentPathSum, largestSum);
			return;
		}

		matrix[row][col] = "$";// Here I'm setting the current element to $ to show a visited cell so we don't hit a recursive cycle.

		rec(row + 1, col, matrix, currentPathSum);// explore the bottom cell
		rec(row, col + 1, matrix, currentPathSum);// explore the right cell
		rec(row - 1, col, matrix, currentPathSum);// explore the top cell
		rec(row, col - 1, matrix, currentPathSum);// explore the left cell

		matrix[row][col] = currentValue;// Because we set the current cell = $, we need to change it back to its original value so we can come back to it when we are on another path
	}

	rec(0, 0, matrix, 0);

	return largestSum > greaterThan && found;// Found is only set to true if we've found one path that is equal to z
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