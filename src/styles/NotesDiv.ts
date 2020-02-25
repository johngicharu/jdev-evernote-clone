import styled from "styled-components";

const NotesDiv = styled.section<{
  drawerOpen: boolean;
  notesDisplayed: boolean;
}>`
  position: fixed;
  left: ${props =>
    props.drawerOpen
      ? `${props.theme.drawerOpenWidth}px`
      : `${props.theme.drawerClosedWidth}px`};
  top: 0;
  bottom: 0;
  width: ${props =>
    props.notesDisplayed ? `${props.theme.notesWidth}px` : "0"};
  overflow: hidden;
  transform-origin: left;
  background-color: ${props => props.theme.colors.textLightColor};
  transition: ${props => props.theme.transition};
`;

export const NotesDivHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 8%;
  padding: 0 0.5em;
  border-bottom: 1px solid #ccc;
`;

export const NotesDivTitle = styled.h3`
  padding: 0.5em 0;
  font-weight: 400;
  width: 100%;
  margin: 0;
`;

export const NotesActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9em;
  padding: 0.3em 0 1em;
`;

export const NotesFilters = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const SortIcon = styled.a`
  display: flex;
  height: 20px;
  overflow: hidden;
  justify-content: space-between;
  cursor: pointer;
  padding-right: 0.5em;

  div {
    margin: 0 0.5em;
  }

  svg {
    height: 100%;
    width: 100%;
    fill: ${({theme}) => theme.colors.textDarkColor};
  }

  &:hover {
    color: ${({theme}) => theme.colors.effectColor};

    svg {
      fill: ${({theme}) => theme.colors.effectColor};
    }
  }
`

export const NotesDisplay = styled.div`
  max-height: 92%;
  overflow: hidden;
  overflow-y: scroll;
  padding: 0.2em 0;
`;

export const Note = styled.div`
  width: 96%;
  height: 120px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5em;
  border: ${({theme}) => `1px solid #ccc`};
  overflow: hidden;
  margin: 0 auto 0.2em;
  cursor: pointer;
  transition: ${({theme}) => theme.transition};

  &:hover {
    box-shadow: 0 2px 2px rgba(0,0,0,0.2);
  }
`;

export const NoteTitle = styled.div`
  font-weight: 600;
  font-size: 1.1em;
  width: 100%;
  height: 23%;
  overflow: hidden;
`;

export const NoteContent = styled.div`
  font-size: 0.9em;
  width: 100%;
  font-weight: 400;
  height: 45%;
  overflow: hidden;
`;

export const NoteDate = styled.div`
  height: 20%;
  font-size: 0.8em;
  font-weight: 500;
  padding: 0.2em 0;
`;

export default NotesDiv;
