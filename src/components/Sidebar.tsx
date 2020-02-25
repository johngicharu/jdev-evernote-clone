import React from "react";
import AppDrawer, {
	AppDrawerIcon,
	AppDrawerItem,
	AppDrawerItemText,
	AppDrawerFooter,
	AppDrawerTogggleIcon,
	AppDrawerAppIcon,
	AppDrawerSocialIcons
} from "../styles/AppDrawer";
import notebookIcon from "../icons/notebook.svg";
import userIcon from "../icons/icon.png";
import noteIcon from "../icons/note.svg";
import ToggleIcon from "../icons/angle-double-left.svg";
import AppIcon from "../icons/icon.png";
import GithubIcon from "../icons/github.svg";
import TwitterIcon from "../icons/twitter.svg";
import TelegramIcon from "../icons/telegram.svg";
import InstagramIcon from "../icons/instagram.svg";
import LinkedinIcon from "../icons/linkedin-in.svg";

interface SidebarProps {
	drawerOpen: boolean;
	toggleElement: (element: "drawerOpen" | "notesDisplayed") => void;
}

const Sidebar = ({ drawerOpen, toggleElement }: SidebarProps) => {
	const toggleSidebar = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		toggleElement("drawerOpen");
	};

	return (
		<AppDrawer drawerOpen={drawerOpen} id="sidebar">
			<AppDrawerItem user>
				<AppDrawerIcon circular>
					<img src={userIcon} alt="U" />
				</AppDrawerIcon>
				<AppDrawerItemText drawerOpen={drawerOpen}>
					johngicharu10@gmail.com
				</AppDrawerItemText>
			</AppDrawerItem>
			<AppDrawerItem active>
				<AppDrawerIcon>
					<img src={noteIcon} alt="ns" />
				</AppDrawerIcon>
				<AppDrawerItemText drawerOpen={drawerOpen}>All Notes</AppDrawerItemText>
			</AppDrawerItem>
			<AppDrawerItem>
				<AppDrawerIcon>
					<img src={notebookIcon} alt="N" />
				</AppDrawerIcon>
				<AppDrawerItemText drawerOpen={drawerOpen}>Notebooks</AppDrawerItemText>
			</AppDrawerItem>
			<AppDrawerTogggleIcon drawerOpen={drawerOpen} onClick={toggleSidebar}>
				<AppDrawerIcon>
					<img src={ToggleIcon} alt="toggle" />
				</AppDrawerIcon>
			</AppDrawerTogggleIcon>
			<AppDrawerFooter drawerOpen={drawerOpen}>
				<AppDrawerAppIcon drawerOpen={drawerOpen}>
					<img src={AppIcon} alt="Evernote Clone" />
				</AppDrawerAppIcon>
				<AppDrawerSocialIcons drawerOpen={drawerOpen}>
					<div>Designed and built by John Gicharu</div>
					<div className="social">
						<a href="github.com">
							<img src={GithubIcon} alt="github" />
						</a>
						<a href="twitter.com">
							<img src={TwitterIcon} alt="twitter" />
						</a>
						<a href="telegram.com">
							<img src={TelegramIcon} alt="telegram" />
						</a>
						<a href="instagram.com">
							<img src={InstagramIcon} alt="instagram" />
						</a>
						<a href="linkedin.com">
							<img src={LinkedinIcon} alt="linkedin" />
						</a>
					</div>
				</AppDrawerSocialIcons>
			</AppDrawerFooter>
		</AppDrawer>
	);
};

export default Sidebar;
