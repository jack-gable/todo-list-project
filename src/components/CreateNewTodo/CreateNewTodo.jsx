import React from "react";
import styled from "styled-components";

function CreateNewTodo({ handleCreateTodo }) {
	const [value, setValue] = React.useState("");
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();

				handleCreateTodo(value);

				setValue("");
			}}
		>
			<TodoInput
				value={value}
				onChange={(event) => setValue(event.target.value)}
				placeholder="Create a new todo..."
			/>
		</form>
	);
}

const TodoInput = styled.input`
	width: 100%;
	border: none;
	border-radius: 8px;
	padding: 10px 20px;
	background-color: var(--light-blue-100);
	color: var(--light-blue-500);
	margin-bottom: 16px;
`;

export default CreateNewTodo;
