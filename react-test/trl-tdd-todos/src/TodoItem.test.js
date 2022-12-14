import { fireEvent, render, screen } from "@testing-library/react";
import TodoItem from "./TodoItem";

describe("<TodoItem/>", () => {
	const sampleTodo = {
		id: 1,
		text: "TDD 배우기",
		done: false,
	};

	const setup = (props = {}) => {
		const initialProps = { todo: sampleTodo };
		render(<TodoItem {...initialProps} {...props} />);
		const todo = props.todo || initialProps.todo;
		const span = screen.getByText(todo.text);
		const button = screen.getByText("삭제");
		return { span, button };
	};

	it("has span and button", () => {
		const { span, button } = setup();
		expect(span).toBeTruthy();
		expect(button).toBeTruthy();
	});

	it("show line-through on span when done is true", () => {
		const { span } = setup({ todo: { ...sampleTodo, done: true } });
		expect(span).toHaveStyle("text-decoration:line-through");
	});

	it("doesn't show line-through on span when done is false", () => {
		const { span } = setup({ todo: { ...sampleTodo, done: false } });
		expect(span).not.toHaveStyle("text-decoration: line-through");
	});

	it("calls toggle", () => {
		const onToggle = jest.fn();
		const { span } = setup({ onToggle });
		fireEvent.click(span);
		expect(onToggle).toBeCalledWith(sampleTodo.id);
	});

	it("calls remove", () => {
		const onRemove = jest.fn();
		const { button } = setup({ onRemove });
		fireEvent.click(button);
		expect(onRemove).toBeCalledWith(sampleTodo.id);
	});
});
