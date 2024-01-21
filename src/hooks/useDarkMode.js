import React from "react";

export function useDarkMode() {
	const [theme, setTheme] = React.useState("light");

	const setMode = (mode) => {
		window.localStorage.setItem("theme", mode);
		setTheme(mode);
	};

	const themeToggler = () => {
		theme === "light" ? setMode("dark") : setMode("light");
	};

	React.useEffect(() => {
		const localTheme = window.localStorage.getItem("theme");
		localTheme && setTheme(localTheme);
	}, []);

	return [theme, themeToggler];
}
