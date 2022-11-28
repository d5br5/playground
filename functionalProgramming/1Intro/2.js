let users = [
	{ id: 1, name: "ID", age: 32 },
	{ id: 2, name: "HA", age: 25 },
	{ id: 3, name: "BJ", age: 32 },
	{ id: 4, name: "PJ", age: 28 },
	{ id: 5, name: "JE", age: 27 },
	{ id: 6, name: "JM", age: 32 },
	{ id: 7, name: "HI", age: 24 },
];

const find = (list, predicate) => {
	for (let item of list) {
		if (predicate(item)) return item;
	}
};

const bMatch1 = (key, value) => (obj) => obj[key] === value;

console.log(find(users, bMatch1("id", 3)));

const object = (key, val) => {
	let obj = {};
	obj[key] = val;
	return obj;
};

const match = (obj, obj2) => {
	for (let key in obj2) {
		if (obj[key] !== obj2[key]) return false;
	}
	return true;
};

function bmatch(obj2, val) {
	if (arguments.length === 2) obj2 = object(obj2, val);
	return function (obj) {
		return match(obj, obj2);
	};
}

function findIndex(list, predicate) {
	for (let i = 0; i < list.length; i++) {
		if (predicate(list[i])) return i;
	}
	return -1;
}
