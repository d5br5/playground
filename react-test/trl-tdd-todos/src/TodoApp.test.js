import { screen, render, fireEvent } from "@testing-library/react";
import TodoApp from "./TodoApp";

describe("<TodoApp/>", () => {
	it("renders TodoForm and TodoList", () => {
		render(<TodoApp />);
		screen.getByText("등록");
		screen.getByTestId("TodoList");
	});

	it("renders two default todos", () => {
		render(<TodoApp />);
		screen.getByText("TDD 배우기");
		screen.getAllByText("react-testing-lib");
	});

	it("creates new todo", () => {
		render(<TodoApp />);
		fireEvent.change(screen.getByPlaceholderText("할 일을 입력하세요."), {
			target: { value: "새 항목 추가하기" },
		});
		fireEvent.click(screen.getByText("등록"));
		screen.getByText("새 항목 추가하기");
	});

	it("toggles todo", () => {
		render(<TodoApp />);
		const todoText = screen.getByText("TDD 배우기");
		expect(todoText).toHaveStyle("text-decoration:line-through;");
		fireEvent.click(todoText);
		expect(todoText).not.toHaveStyle("text-decoration:line-through;");
		fireEvent.click(todoText);
		expect(todoText).toHaveStyle("text-decoration:line-through;");
	});

	it("removes todo", () => {
		render(<TodoApp />);
		const todoText = screen.getByText("TDD 배우기");
		const removeButton = todoText.nextSibling;
		fireEvent.click(removeButton);
		expect(todoText).not.toBeInTheDocument();
	});
});
