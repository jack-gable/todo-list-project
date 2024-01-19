import React from "react";
import CreateNewTodo from "../CreateNewTodo";
import TodoList from "../TodoList";

function Todos() {
	const [todos, setTodos] = React.useState([]);

	function handleCreateTodo(value) {
		setTodos([
			...todos,
			{
				value,
				id: crypto.randomUUID(),
				completed: false,
			},
		]);
	}

	function handleToggleTodo(id) {
		setTodos(
			todos.map((todo) => {
				if (todo.id !== id) {
					return todo;
				}

				return {
					...todo,
					completed: !todo.completed,
				};
			})
		);
	}

	function handleDeleteTodo(id) {
		setTodos(todos.filter((todo) => todo.id !== id));
	}

	function handleClearCompleted() {
		const nextTodos = todos.filter((todo) => todo.completed === false);
		setTodos(nextTodos);
	}

	return (
		<div>
			<CreateNewTodo handleCreateTodo={handleCreateTodo} />
			<TodoList
				todos={todos}
				handleToggleTodo={handleToggleTodo}
				handleDeleteTodo={handleDeleteTodo}
				handleClearCompleted={handleClearCompleted}
			/>
		</div>
	);
}

export default Todos;
