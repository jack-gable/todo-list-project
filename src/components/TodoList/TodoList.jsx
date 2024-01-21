import React from "react";
import styled from "styled-components";
import { X, Menu } from "react-feather";
import VisuallyHidden from "../VisuallyHidden";
import Checkmark from "../../assets/images/icon-check.svg";
import TodoFilter from "../TodoFilter";

function TodoList({
	todos,
	setTodos,
	handleToggleTodo,
	handleDeleteTodo,
	handleClearCompleted,
	handleFilterTodos,
}) {
	const dragItem = React.useRef(0);
	const draggedOverItem = React.useRef(0);

	const notCompletedTodos = todos.filter((todo) => todo.completed === false);

	function handleSortItems() {
		const todosClone = [...todos];
		const temp = todosClone[dragItem.current];
		todosClone[dragItem.current] = todosClone[draggedOverItem.current];
		todosClone[draggedOverItem.current] = temp;
		setTodos(todosClone);
	}

	return (
		<>
			<List>
				{todos.map(({ value, id, completed }, index) => (
					<ListItem
						key={id}
						draggable={true}
						onDragStart={() => (dragItem.current = index)}
						onDragEnter={() => (draggedOverItem.current = index)}
						onDragEnd={handleSortItems}
						onDragOver={(event) => event.preventDefault()}
					>
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
						<BtnContainer>
							<DeleteBtn
								onClick={() => {
									handleDeleteTodo(id);
								}}
							>
								<X strokeWidth={1} />
								<VisuallyHidden>Delete item</VisuallyHidden>
							</DeleteBtn>
							<MoveBtn>
								<Menu />
							</MoveBtn>
						</BtnContainer>
					</ListItem>
				))}
				{notCompletedTodos && (
					<ListItem>
						<Count>{notCompletedTodos.length} items left</Count>
						<SmallFilterContainer>
							<TodoFilter handleFilter={handleFilterTodos} />
						</SmallFilterContainer>
						<ClearBtn onClick={() => handleClearCompleted()}>
							Clear Completed
						</ClearBtn>
					</ListItem>
				)}
			</List>
			<FilterContainer>
				<TodoFilter handleFilter={handleFilterTodos} />
			</FilterContainer>
		</>
	);
}

const List = styled.ol`
	display: flex;
	flex-direction: column;
	padding: 0;
	margin: 0;
	list-style: none;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.listBg};
`;

const ListItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 16px;
	padding: 16px;
	color: ${({ theme }) => theme.listText};
	touch-action: none;

	&:not(:last-of-type) {
		border-bottom: 1px solid ${({ theme }) => theme.borderColor};
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
	color: ${({ theme }) => theme.btnColor};

	&:hover {
		color: ${({ theme }) => theme.btnHover};
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
	text-decoration: ${({ checked }) => (checked ? "line-through" : "none")};
	color: ${({ checked, theme }) => (checked ? theme.text : theme.listText)};
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
	appearance: none;
	width: 24px;
	height: 24px;
	border-radius: 50%;
	border: 1px solid ${({ theme }) => theme.borderColor};
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
	color: ${({ theme }) => theme.btnColor};
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.btnHover};
	}

	@media (min-width: 375px) {
		font-size: 12px;
	}
`;

const FilterContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 16px;
	border-radius: 8px;
	margin-top: 40px;
	background-color: ${({ theme }) => theme.listBg};

	@media (min-width: 375px) {
		display: none;
	}
`;

const SmallFilterContainer = styled.div`
	display: none;

	@media (min-width: 375px) {
		display: block;
	}
`;

const Count = styled.p`
	color: ${({ theme }) => theme.text};

	@media (min-width: 375px) {
		font-size: 12px;
		margin-right: 42px;
	}
`;

const BtnContainer = styled.div`
	display: flex;
	gap: 8px;
`;

const MoveBtn = styled(DeleteBtn)`
	display: none;
	cursor: grab;

	&:active {
		cursor: grabbing;
	}

	@media (min-width: 375px) {
		display: inline-block;
	}
`;

export default TodoList;
