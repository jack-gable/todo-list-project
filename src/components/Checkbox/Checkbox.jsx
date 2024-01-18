// import React from 'react';
import styled from "styled-components";
import { Check } from "react-feather";

function Checkbox({ checked, ...delegated }) {
	return (
		<>
			<HiddenCheckbox checked={checked} {...delegated} />
			<StyledCheckbox checked={checked}>
				<Check size={22} strokeWidth={3} />
			</StyledCheckbox>
		</>
	);
}

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
	position: absolute;
	opacity: 0;
	cursor: pointer;
	height: 0;
	width: 0;
`;

const StyledCheckbox = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	height: 32px;
	width: 32px;
	background: ${({ checked }) => (checked ? "var(--check-bg)" : "transparent")};
	border-radius: 50%;
	border: 1px solid var(--light-blue-400);
	display: flex;
	justify-content: center;
	align-items: center;
	color: var(--light-blue-100);
	margin-top: -4px;
`;

export default Checkbox;
