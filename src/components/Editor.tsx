import React from "react";
import CustomEditor, { EditorActions } from "../styles/CustomEditor";
import ExpandArrows from "../icons/ExpandArrows";
import Menu from "../icons/Menu";
import ReactQuill from "react-quill";

interface EditorProps {
  drawerOpen: boolean;
  notesDisplayed: boolean;
  selectedNotebook: string;
  toggleElement: (element: "drawerOpen" | "notesDisplayed") => void;
}

const Editor = ({ drawerOpen, notesDisplayed, toggleElement, selectedNotebook }: EditorProps) => {
  const toggleEditor = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    toggleElement("notesDisplayed");
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  return (
    <CustomEditor notesDisplayed={notesDisplayed} drawerOpen={drawerOpen}>
      <EditorActions notesDisplayed={notesDisplayed}>
        <div className="editorActionDisplay">
        <ExpandArrows eventHandler={toggleEditor} />
          <div className="editorActionsText">
            {selectedNotebook.trim() === "" ? "All Notes" : selectedNotebook}
          </div>
        </div>
        <Menu />
      </EditorActions>
      <ReactQuill theme="snow"
                    modules={modules}
                    formats={formats} />
    </CustomEditor>
  );
};

export default Editor;
