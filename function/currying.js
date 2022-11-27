function solution(str) {
	function adder(arg, prev = "") {
		let histoty = prev;
		if (arg === undefined) {
			return histoty;
		} else {
			history = prev === "" ? arg : `${prev} ${arg}`;
			return (newArg) => adder(newArg, history);
		}
	}
	return adder(str, "");
}

console.log("answer", solution("a")());
console.log("answer", solution("a")("b")());
console.log(
	"answer",
	solution("가")("나")("다")("다")("다")("다")("다")("다")()
);
console.log("answer", solution());
