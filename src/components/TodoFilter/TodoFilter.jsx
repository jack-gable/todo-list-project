import React from "react";
import styled from "styled-components";

const BUTTONS = [
	{
		name: "All",
		value: "all",
		id: 1,
	},
	{
		name: "Active",
		value: "active",
		id: 2,
	},
	{
		name: "Completed",
		value: "completed",
		id: 3,
	},
];

function TodoFilter({ handleFilter }) {
	const [active, setActive] = React.useState(1);

	return (
		<Wrapper>
			{BUTTONS.map(({ name, value, id }) => (
				<StyledBtn
					key={id}
					value={value}
					color={active === id ? "var(--primary)" : "var(--light-blue-400)"}
					onClick={(event) => {
						handleFilter(event);
						setActive(id);
					}}
				>
					{name}
				</StyledBtn>
			))}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	gap: 20px;

	@media (min-width: 375px) {
		gap: 14px;
	}
`;

const StyledBtn = styled.button`
	border: none;
	background-color: transparent;
	color: ${({ color }) => color};
	cursor: pointer;
	font-weight: 700;

	&:hover {
		color: ${({ theme }) => theme.btnHover};
	}

	@media (min-width: 375px) {
		font-size: 12px;
	}
`;

export default TodoFilter;
