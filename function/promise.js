const p1 = () =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve(["KR", "US"]);
		}, 1000);
	});

const p2 = (str) => {
	return new Promise((resolve) => {
		resolve([`${str}11`, `${str}22`]);
	});
};
function solution() {
	const items = [];
	return new Promise((resolve, reject) => {
		p1()
			.then((data) => data.forEach((str) => p2(str).then((result) => items.push(...result))))
			.then(() => {
				resolve(items);
			});
		setTimeout(() => {
			reject(new Error("timeout"));
		}, [3000]);
	});
}

solution().then((data) => console.log(data));
