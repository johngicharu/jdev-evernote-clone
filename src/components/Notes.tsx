import React from "react";
import Moment from "react-moment";
import NotesDiv, { Note, NoteTitle, NoteContent, NotesDivTitle, NotesDivHeader, NoteDate, NotesFilters, NotesActions, NotesDisplay, SortIcon } from "../styles/NotesDiv";
import { NoteType } from "../globalTypes";
import SortDown from "../icons/SortDown";

interface NotesProps {
  drawerOpen: boolean;
  notesDisplayed: boolean;
  notes: NoteType[];
}

const Notes = ({ drawerOpen, notesDisplayed, notes }: NotesProps) => {
  return (
    <NotesDiv
      drawerOpen={drawerOpen}
      notesDisplayed={notesDisplayed}
      id="notes_display"
    >
      <NotesDivHeader>
        <NotesDivTitle>
          All Notes
        </NotesDivTitle>
        <NotesActions>
          <div>
          {`${notes.length} ${notes.length > 1 ? "Notes" : "Note"}`}
          </div>
          <NotesFilters>
            <SortIcon>
              Date
              <SortDown />
            </SortIcon>
          </NotesFilters>
        </NotesActions>
      </NotesDivHeader>

      <NotesDisplay>
        {
          notes.map(note => (
            <Note key={note.id}>
              <NoteTitle>{note.title}</NoteTitle>
              <NoteContent>{note.content}</NoteContent>
              <NoteDate>
                <Moment format="MMM DD, YYYY">{note.date}</Moment>
              </NoteDate>
            </Note>
          ))
        }
      </NotesDisplay>
    </NotesDiv>
  );
};

export default Notes;
