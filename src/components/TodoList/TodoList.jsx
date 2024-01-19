import styled from "styled-components";
import { X } from "react-feather";
import VisuallyHidden from "../VisuallyHidden";
import Checkmark from "../../assets/images/icon-check.svg";

function TodoList({
	todos,
	handleToggleTodo,
	handleDeleteTodo,
	handleClearCompleted,
}) {
	const notCompletedTodos = todos.filter((todo) => todo.completed === false);

	return (
		<List>
			{todos.map(({ value, id, completed }) => (
				<ListItem key={id}>
					<CheckboxContainer>
						<Checkbox
							type="checkbox"
							id={id}
							checked={completed}
							onChange={() => {
								handleToggleTodo(id);
							}}
						/>
						<StyledLabel htmlFor={id} checked={completed}>
							{value}
						</StyledLabel>
					</CheckboxContainer>
					<DeleteBtn
						onClick={() => {
							handleDeleteTodo(id);
						}}
					>
						<X strokeWidth={1} />
						<VisuallyHidden>Delete item</VisuallyHidden>
					</DeleteBtn>
				</ListItem>
			))}
			{notCompletedTodos.length >= 1 && (
				<ListItem>
					<div>{notCompletedTodos.length} items left</div>
					<ClearBtn onClick={() => handleClearCompleted()}>
						Clear Completed
					</ClearBtn>
				</ListItem>
			)}
		</List>
	);
}

const List = styled.ol`
	display: flex;
	flex-direction: column;
	padding: 0;
	margin: 0;
	list-style: none;
	border-radius: 8px;
`;

const ListItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 16px;
	padding: 16px;
	/* color: var(--light-blue-400); */

	&:not(:last-of-type) {
		border-bottom: 1px solid var(--light-blue-400);
	}
`;

const DeleteBtn = styled.button`
	width: 28px;
	height: 28px;
	border: none;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	cursor: pointer;
	background: transparent;
	color: var(--light-blue-400);

	&:hover {
		color: var(--light-blue-500);
	}
`;

const CheckboxContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`;

const StyledLabel = styled.label`
	display: block;
	position: relative;
	padding-left: 16px;
	cursor: pointer;
	user-select: none;
	/* color: var(--light-blue-500); */
	text-decoration: ${({ checked }) => (checked ? "line-through" : "none")};
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
	appearance: none;
	width: 24px;
	height: 24px;
	border-radius: 50%;
	border: 1px solid var(--light-blue-400);
	background: ${({ checked }) => (checked ? "var(--check-bg)" : "transparent")};
	cursor: pointer;

	&:checked + ${StyledLabel}::before {
		content: url(${Checkmark});
		position: absolute;
		top: 0;
		left: -18px;
		stroke-width: 6px;
	}
`;

const ClearBtn = styled.button`
	border: none;
	background-color: transparent;
	color: var(--light-blue-400);
	cursor: pointer;

	&:hover {
		color: var(--light-blue-500);
	}
`;

export default TodoList;
