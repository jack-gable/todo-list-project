import styled from "styled-components";
import lightBgDesktopImg from "../../assets/images/bg-desktop-light.jpg";
import darkBgDesktopImg from "../../assets/images/bg-desktop-dark.jpg";
// import lightBgMobileImg from '../../assets/images/bg-mobile-light.jpg'
// import darkBgMobileImg from '../../assets/images/bg-mobile-dark.jpg'

function Background({ theme, children }) {
	const backgroundImg =
		theme === "light" ? lightBgDesktopImg : darkBgDesktopImg;
	return <Wrapper $image={backgroundImg}>{children}</Wrapper>;
}

const Wrapper = styled.div`
	background-image: url(${({ $image }) => $image});
	background-repeat: no-repeat;
	height: 100vh;
	transition: all 0.5s linear;
`;

export default Background;
