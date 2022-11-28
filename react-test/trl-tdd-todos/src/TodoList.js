import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle, onRemove }) => {
	return (
		<ul data-testid="TodoList">
			{todos.map((a) => (
				<TodoItem key={a.id} todo={a} onToggle={onToggle} onRemove={onRemove} />
			))}
		</ul>
	);
};

export default TodoList;
