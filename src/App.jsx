import React from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import Header from "./components/Header";
import Background from "./components/Background/Background";
import Todos from "./components/Todos/Todos";

function App() {
	const [theme, setTheme] = React.useState("light");

	const toggleTheme = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};

	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<Background theme={theme}>
				<Container>
					<Header toggleTheme={toggleTheme} theme={theme} />
					<Todos />
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

export default App;
