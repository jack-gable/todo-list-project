import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import Header from "./components/Header";
import Background from "./components/Background/Background";
import Todos from "./components/Todos/Todos";
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
	const [theme, themeToggler] = useDarkMode("light");

	const themeMode = theme === "light" ? lightTheme : darkTheme;

	return (
		<ThemeProvider theme={themeMode}>
			<Background theme={theme}>
				<Container>
					<Header toggleTheme={themeToggler} theme={theme} />
					<Todos />
					<Footer>Drag and drop to reorder list</Footer>
				</Container>
			</Background>
			<GlobalStyles />
		</ThemeProvider>
	);
}

const Container = styled.div`
	max-width: 525px;
	min-width: 350px;
	padding-left: 20px;
	padding-right: 20px;
	padding-top: 45px;
	margin: 0 auto;
	height: 100%;
`;

const Footer = styled.p`
	margin-top: 40px;
	text-align: center;
	font-size: 16px;

	@media (min-width: 375px) {
		font-size: 10px;
		font-weight: 700;
	}
`;

export default App;
