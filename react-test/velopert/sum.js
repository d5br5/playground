function sum(a, b) {
	return a + b;
}

function sumOf(numbers) {
	return numbers.reduce((a, b) => a + b, 0);
}

exports.sum = sum;
exports.sumOf = sumOf;
