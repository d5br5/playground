import { useCallback, useRef, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
	const [todos, setTodos] = useState([
		{
			id: 1,
			text: "TDD 배우기",
			done: true,
		},
		{
			id: 2,
			text: "react-testing-lib",
			done: false,
		},
	]);
	const nextId = useRef(3);
	const onInsert = useCallback((text) => {
		setTodos((todos) => [...todos, { id: nextId.current, text, done: false }]);
		nextId.current += 1;
	}, []);
	const onToggle = useCallback(
		(id) =>
			setTodos((todos) =>
				todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
			),
		[]
	);

	const onRemove = useCallback((id) => {
		setTodos((todos) => todos.filter((todo) => todo.id !== id));
	}, []);
	return (
		<div>
			<TodoForm onInsert={onInsert} />
			<TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
		</div>
	);
};

export default TodoApp;
