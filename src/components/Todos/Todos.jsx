import React from "react";
import CreateNewTodo from "../CreateNewTodo";
import TodoList from "../TodoList";
import useLocalStorage from "../../hooks/useLocalStorage";

function Todos() {
	const [todos, setTodos] = useLocalStorage("todos", []);
	const [filteredTodos, setFilteredTodos] = React.useState([]);

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

	function getTodos() {
		const todoList = todos;
		return todoList;
	}

	React.useEffect(() => {
		setFilteredTodos(getTodos());
	}, [todos]);

	function filterTodo(type) {
		let nextTodos;
		if (type === "active") {
			nextTodos = todos.filter((todo) => todo.completed === false);
		} else if (type === "completed") {
			nextTodos = todos.filter((todo) => todo.completed === true);
		}

		return nextTodos;
	}

	function handleFilterTodos(event) {
		let filterType = event.target.value;
		filterType !== "all"
			? setFilteredTodos(filterTodo(filterType))
			: setFilteredTodos(getTodos());
	}

	return (
		<div>
			<CreateNewTodo handleCreateTodo={handleCreateTodo} />
			<TodoList
				todos={filteredTodos}
				setTodos={setTodos}
				handleToggleTodo={handleToggleTodo}
				handleDeleteTodo={handleDeleteTodo}
				handleClearCompleted={handleClearCompleted}
				handleFilterTodos={handleFilterTodos}
			/>
		</div>
	);
}

export default Todos;
