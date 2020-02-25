import styled from "styled-components";

const AppDrawer = styled.aside<{ drawerOpen: boolean }>`
	background-image: ${props => props.theme.colors.backgroundGradientDark};
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: ${props =>
		props.drawerOpen
			? `${props.theme.drawerOpenWidth}px`
			: `${props.theme.drawerClosedWidth}px`};
	transition: ${props => props.theme.transition};

	/* Effects based on classes */
	.closeIcon {
		transform: ${({drawerOpen}) => drawerOpen ? "" : "rotate(180deg)"};
	}
`;

export const AppDrawerItem = styled.div<{ active?: boolean; user?: boolean; onClick?: (e: React.MouseEvent) => void }>`
	display: flex;
	width: 100%;
	height: 40px;
	align-items: center;
	justify-content: space-between;
	padding: 0 1em;
	color: ${props => props.theme.colors.textLightColor};
	background-color: ${props => props.active && props.theme.colors.effectColor};
	overflow: hidden;
	border-radius: 4px;
	margin: 0.2em 0;
	margin-bottom: ${props => (props.user ? "0.5em" : "0.2em")};
	cursor: pointer;
	transition: ${props => props.theme.transition};

	&:hover {
		background-color: ${props => !props.user && props.theme.colors.effectColor};
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
	width: 2em;
	height: 2em;
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
	color: ${props => props.theme.colors.textLightColor};
	border-top: 1px solid ${props => props.theme.colors.textLightColor};
`;

export const AppDrawerCollection = styled(AppDrawerItem)<{isOpen: boolean}>`
	height: auto;
	display: block;
	max-height: ${({isOpen}) => isOpen ? "180px" : "40px"};
	padding: 0;

	&:hover {
		background-color: transparent;
	}
`;

export const AppDrawerCollectionHeaderText = styled(AppDrawerItemText)`

`;

export const AppDrawerCollectionItemText = styled(AppDrawerItemText)`
	padding-left: 0.5em;
`;

export const AppDrawerCollectionHeader = styled(AppDrawerItem)`
`;

export const AppdrawerCollectionItems = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const AppDrawerCollectionItem = styled(AppDrawerItem)`
	width: 92%;
	margin-left: 8%;
	display: flex;
	padding: 0.3em 0.3em 0.3em 0.5em;
`;

export default AppDrawer;
