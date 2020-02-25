import React, { useState } from "react";
import AppDrawer, {
	AppDrawerIcon,
	AppDrawerItem,
	AppDrawerItemText,
	AppDrawerFooter,
	AppDrawerTogggleIcon,
	AppDrawerAppIcon,
	AppDrawerSocialIcons,
	AppDrawerCollection,
	AppdrawerCollectionItems,
	AppDrawerCollectionItem,
	AppDrawerCollectionHeader,
	AppDrawerCollectionHeaderText,
	AppDrawerCollectionItemText
} from "../styles/AppDrawer";
import icons from "../icons";

const {DoubleAngle, SiteIcon,NoteIcon,NotebookIcon, Github, Twitter, Telegram, LinkedIn, Instagram } = icons;

interface SidebarProps {
	drawerOpen: boolean;
	toggleElement: (element: "drawerOpen" | "notesDisplayed") => void;
	notebooks: {id: string; title: string}[];
}

const Sidebar = ({ drawerOpen, toggleElement, notebooks }: SidebarProps) => {

	const [notebooksToggle, setNotebooksToggle] = useState(false);

	const toggleSidebar = (e: React.MouseEvent) => {
		e.preventDefault();
		toggleElement("drawerOpen");
	};

	const openNotebooks = () => {
		if (drawerOpen) {
			setNotebooksToggle(!notebooksToggle);
		} else {
			toggleElement("drawerOpen");
			setNotebooksToggle(!notebooksToggle);
		}
	}

	return (
		<AppDrawer drawerOpen={drawerOpen} id="sidebar">
			<AppDrawerItem user>
				<AppDrawerIcon circular>
					<SiteIcon />
				</AppDrawerIcon>
				<AppDrawerItemText drawerOpen={drawerOpen}>
					johngicharu10@gmail.com
				</AppDrawerItemText>
			</AppDrawerItem>
			<AppDrawerItem active>
				<AppDrawerIcon>
					<NoteIcon />
				</AppDrawerIcon>
				<AppDrawerItemText drawerOpen={drawerOpen}>All Notes</AppDrawerItemText>
			</AppDrawerItem>

			<AppDrawerCollection isOpen={notebooksToggle}>			
				<AppDrawerCollectionHeader onClick={openNotebooks}>
				<AppDrawerIcon>
					<NotebookIcon />
				</AppDrawerIcon>
					<AppDrawerCollectionHeaderText drawerOpen={drawerOpen}>Notebooks</AppDrawerCollectionHeaderText>
				</AppDrawerCollectionHeader>
				<AppdrawerCollectionItems>
						{
							notebooks.map(notebook => (
								<AppDrawerCollectionItem id={notebook.id} key={notebook.id}>
									<AppDrawerIcon>
										<NotebookIcon />
									</AppDrawerIcon>
							<AppDrawerCollectionItemText drawerOpen={drawerOpen}>{notebook.title}</AppDrawerCollectionItemText>
								</AppDrawerCollectionItem>
							))
						}
				</AppdrawerCollectionItems>
			</AppDrawerCollection>

			<AppDrawerTogggleIcon drawerOpen={drawerOpen} onClick={toggleSidebar}>
				<AppDrawerIcon className="closeIcon">
					<DoubleAngle />
				</AppDrawerIcon>
			</AppDrawerTogggleIcon>
			<AppDrawerFooter drawerOpen={drawerOpen}>
				<AppDrawerAppIcon drawerOpen={drawerOpen}>
					<SiteIcon />
				</AppDrawerAppIcon>
				<AppDrawerSocialIcons drawerOpen={drawerOpen}>
					<div>Designed and built by John Gicharu</div>
					<div className="social">
						<Github customLink={"https://github.com"} />
						<Twitter customLink={"https://twitter.com"} />
						<Telegram customLink={"https://telegram.com"} />
						<Instagram customLink={"https://instagram.com"} />
						<LinkedIn customLink={"https://linked-in.com"} />
					</div>
				</AppDrawerSocialIcons>
			</AppDrawerFooter>
		</AppDrawer>
	);
};

export default Sidebar;
