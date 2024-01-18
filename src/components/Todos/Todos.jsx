import React from "react";
import styled from "styled-components";
import Checkbox from "../Checkbox";

function reducer(state, action) {
	switch (action.type) {
		case "ADD_TODO": {
			return [
				...state,
				{
					label: action.label,
					id: crypto.randomUUID(),
					completed: false,
				},
			];
		}

		case "TOGGLE_TODO": {
			return state.map((todo) => {
				if (todo.id === action.id) {
					return {
						...todo,
						completed: !todo.completed,
					};
				}
			});
		}
	}
}

function Todos() {
	const [tentativeTodo, setTentativeTodo] = React.useState("");
	const [state, dispatch] = React.useReducer(reducer, []);

	function handleSubmit(event) {
		event.preventDefault();

		dispatch({
			type: "ADD_TODO",
			label: tentativeTodo,
		});

		setTentativeTodo("");
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<TodoInput
					value={tentativeTodo}
					onChange={(event) => setTentativeTodo(event.target.value)}
					placeholder="Create a new todo..."
				/>
			</form>
			<List>
				{state.map(({ label, id, completed }) => (
					<ListItem key={id}>
						<StyledLabel htmlFor={id} checked={completed}>
							<Checkbox
								type="checkbox"
								id={id}
								checked={completed}
								onChange={() => {
									dispatch({
										type: "TOGGLE_TODO",
										id,
									});
								}}
							/>
							{label}
						</StyledLabel>
					</ListItem>
				))}
			</List>
		</div>
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

const List = styled.ol`
	display: flex;
	flex-direction: column;
	padding: 0;
	margin: 0;
	list-style: none;
	background-color: var(--light-blue-100);
	border-radius: 8px;
`;

const ListItem = styled.li`
	display: flex;
	align-items: baseline;
	gap: 16px;
	padding: 16px;

	&:not(:last-of-type) {
		border-bottom: 1px solid var(--light-blue-400);
	}
`;

const StyledLabel = styled.label`
	display: block;
	position: relative;
	padding-left: 40px;
	cursor: pointer;
	user-select: none;
	color: var(--light-blue-500);
	text-decoration: ${({ checked }) => (checked ? "line-through" : "none")};
`;

export default Todos;
