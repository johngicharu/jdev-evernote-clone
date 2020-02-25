import styled from "styled-components";

const AppDrawer = styled.aside<{ drawerOpen: boolean }>`
	background-image: ${props => props.theme.backgroundGradientDark};
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: ${props =>
		props.drawerOpen
			? `${props.theme.drawerOpenWidth}px`
			: `${props.theme.drawerClosedWidth}px`};
	transition: ${props => props.theme.transition};
`;

export const AppDrawerItem = styled.a<{ active?: boolean; user?: boolean }>`
	display: flex;
	width: 100%;
	height: 40px;
	align-items: center;
	justify-content: space-between;
	padding: 0 1em;
	color: ${props => props.theme.white};
	background-color: ${props => props.active && props.theme.secondary};
	overflow: hidden;
	border-radius: 4px;
	margin: 0.2em 0;
	margin-bottom: ${props => (props.user ? "0.5em" : "0.2em")};
	cursor: pointer;
	transition: ${props => props.theme.transition};

	&:hover {
		background-color: ${props => !props.user && props.theme.secondary};
	}
`;

export const AppDrawerItemText = styled.div<{ drawerOpen: boolean }>`
	text-align: left;
	width: ${props =>
		props.drawerOpen ? `${props.theme.drawerOpenWidth - 25}px` : "0px"};
	transform-origin: bottom;
	padding-left: 1em;
	overflow: hidden;
	opacity: ${props => (props.drawerOpen ? "1" : "0")};
	transition: ${props => props.theme.transition};
`;

export const AppDrawerIcon = styled.div<{ circular?: boolean }>`
	width: 25px;
	height: 25px;
	border-radius: ${props => props.circular && "50%"};
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: ${props => props.circular && "hidden"};
	transition: ${props => props.theme.transition};

	img {
		height: 100%;
		width: 100%;
	}
`;

export const AppDrawerTogggleIcon = styled(AppDrawerItem)<{
	drawerOpen: boolean;
}>`
	justify-content: flex-end;
	position: absolute;
	bottom: 11%;

	&:hover {
		background-color: none;
	}

	img {
		transition: ${props => props.theme.transition};
		transform: ${props =>
			props.drawerOpen ? "rotate(0deg)" : "rotate(180deg)"};
	}
`;

export const AppDrawerAppIcon = styled.div<{ drawerOpen: boolean }>`
	display: ${props => (props.drawerOpen ? "none" : "flex")};
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;

	img {
		height: 40px;
		width: 40px;
		border-radius: 50%;
	}
`;

export const AppDrawerSocialIcons = styled.div<{ drawerOpen: boolean }>`
	display: ${props => (props.drawerOpen ? "flex" : "none")};
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	padding: 0.5em 0;

	.social {
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-top: 0.3em;

		a {
			display: flex;
			height: 100%;
			width: 100%;
			height: 25px;
			width: 25px;
			margin: 0 0.5em;
			overflow: hidden;
			justify-content: center;
			align-items: center;

			img {
				height: 100%;
				width: 100%;
			}
		}
	}
`;

export const AppDrawerFooter = styled.div<{ drawerOpen: boolean }>`
	position: fixed;
	bottom: 0;
	right: 0;
	left: 0;
	height: 10%;
	width: ${props =>
		props.drawerOpen
			? `${props.theme.drawerOpenWidth}px`
			: `${props.theme.drawerClosedWidth}px`};
	text-align: center;
	color: ${props => props.theme.white};
	border-top: 1px solid ${props => props.theme.white};
`;

export default AppDrawer;
