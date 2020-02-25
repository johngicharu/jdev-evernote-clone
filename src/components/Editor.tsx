import React from "react";
import CustomEditor from "../styles/CustomEditor";

interface EditorProps {
  drawerOpen: boolean;
  notesDisplayed: boolean;
  toggleElement: (element: "drawerOpen" | "notesDisplayed") => void;
}

const Editor = ({ drawerOpen, notesDisplayed, toggleElement }: EditorProps) => {
  const toggleEditor = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    toggleElement("notesDisplayed");
  };

  return (
    <CustomEditor notesDisplayed={notesDisplayed} drawerOpen={drawerOpen}>
      Editor
      <a href="#!" onClick={toggleEditor}>
        Toggle
      </a>
    </CustomEditor>
  );
};

export default Editor;
