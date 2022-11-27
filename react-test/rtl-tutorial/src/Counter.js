import { useState, useCallback } from "react";

const Counter = () => {
	const [number, setNumber] = useState(0);
	const onIncrease = useCallback(() => {
		setNumber((prev) => prev + 1);
	}, []);

	const onDecrease = useCallback(() => {
		setNumber((prev) => prev - 1);
	});

	return (
		<div>
			<h2>{number}</h2>
			<button onClick={onIncrease}>+1</button>
			<button onClick={onDecrease}>-1</button>
		</div>
	);
};

export default Counter;
