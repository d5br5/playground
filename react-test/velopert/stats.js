exports.max = (numbers) => Math.max(...numbers);
exports.min = (numbers) => Math.min(...numbers);
// exports.avg = (numbers) => {
// 	const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// 	return sum / numbers.length;
// };

exports.avg = (numbers) =>
	numbers.reduce((acc, curr, index, { length }) => acc + curr / length, 0);

exports.sort = (numbers) => numbers.sort();

exports.median = (numbers) => {
	const { length } = numbers;
	const middle = Math.floor(length / 2);
	return length % 2
		? numbers[middle]
		: (numbers[middle - 1] + numbers[middle]) / 2;
};

exports.mode = (numbers) => {
	const counts = new Map();
	numbers.forEach((n) => {
		const count = counts.get(n) || 0;
		counts.set(n, count + 1);
	});
	const maxCount = Math.max(...counts.values());
	const origin = [...counts.keys()];
	const result = origin.filter((a) => counts.get(a) === maxCount);
	return origin.length === result.length
		? null
		: result.length === 1
		? result[0]
		: result;
};
