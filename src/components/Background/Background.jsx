import styled from "styled-components";
import lightBgDesktopImg from "../../assets/images/bg-desktop-light.jpg";
import darkBgDesktopImg from "../../assets/images/bg-desktop-dark.jpg";
import lightBgMobileImg from "../../assets/images/bg-mobile-light.jpg";
import darkBgMobileImg from "../../assets/images/bg-mobile-dark.jpg";

function Background({ theme, children }) {
	const backgroundImg =
		theme === "light" ? lightBgDesktopImg : darkBgDesktopImg;
	const mobileBackgroundImg =
		theme === "light" ? lightBgMobileImg : darkBgMobileImg;

	return (
		<Wrapper $image={backgroundImg} $mobileImage={mobileBackgroundImg}>
			{children}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	background-image: url(${({ $mobileImage }) => $mobileImage});
	background-repeat: no-repeat;
	height: 100vh;

	@media (min-width: 375px) {
		background-image: url(${({ $image }) => $image});
	}
`;

export default Background;
