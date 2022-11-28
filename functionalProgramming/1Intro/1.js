const users = [
	{ id: 1, name: "ID", age: 32 },
	{ id: 2, name: "HA", age: 25 },
	{ id: 3, name: "DL", age: 31 },
	{ id: 4, name: "EO", age: 28 },
	{ id: 5, name: "CO", age: 27 },
	{ id: 6, name: "XH", age: 32 },
	{ id: 7, name: "QN", age: 24 },
	{ id: 8, name: "ZU", age: 33 },
];

function filter(list, predicate) {
	const new_list = [];
	for (let item of list) if (predicate(item)) new_list.push(item);
	return new_list;
}

function map(list, iteratee) {
	const new_list = [];
	for (let item of list) new_list.push(iteratee(item));
	return new_list;
}

let under_30 = (u) => u.age < 30;
let over_30 = (u) => u.age >= 30;
const bValue = (key) => (list) => map(list, (v) => v[key]);
const age = bValue("age");
const names = bValue("name");

let ages_over_30 = age(filter(users, under_30));

console.log(ages_over_30);

let names_over_30 = names(filter(users, over_30));

console.log(names_over_30);
