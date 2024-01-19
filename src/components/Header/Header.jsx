import styled from "styled-components";
import { Sun, Moon } from "react-feather";
import VisuallyHidden from "../VisuallyHidden";

function Header({ toggleTheme, theme }) {
	return (
		<Wrapper>
			<Title>Todo</Title>
			<ToggleBtn onClick={toggleTheme}>
				{theme === "light" ? (
					<Moon size={25} color="var(--light-blue-100)" />
				) : (
					<Sun size={25} color="var(--dark-blue-100)" />
				)}
				<VisuallyHidden>Toggle dark/light mode</VisuallyHidden>
			</ToggleBtn>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 35px;
`;

const Title = styled.h1`
	text-transform: uppercase;
	line-height: 1;
`;

const ToggleBtn = styled.button`
	--size: 40px;
	width: var(--size);
	height: var(--size);
	border: none;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: transparent;
	cursor: pointer;
`;

export default Header;
