var f1 = function () {
	console.log(arguments.callee);
};

f1();

var f2 = f1;

f2();

f1 = null;

f2();

function flatten2(arr, new_arr = []) {
	arr.forEach(function (v) {
		Array.isArray(v) ? flatten2(v, new_arr) : new_arr.push(v);
	});
	return new_arr;
}

console.log(flatten2([1, 2, [3, 4, [5, 6]], 7, 8, 9]));
