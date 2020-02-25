import React from "react";
import NotesDiv from "../styles/NotesDiv";

interface NotesProps {
  drawerOpen: boolean;
  notesDisplayed: boolean;
}

const Notes = ({ drawerOpen, notesDisplayed }: NotesProps) => {
  return (
    <NotesDiv
      drawerOpen={drawerOpen}
      notesDisplayed={notesDisplayed}
      id="notes_display"
    >
      <h1>Notes Outputted Here</h1>
      Notes Here
    </NotesDiv>
  );
};

export default Notes;
