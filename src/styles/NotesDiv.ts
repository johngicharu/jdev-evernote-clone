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
  overflow-y: scroll;
  transform-origin: left;
  background-color: ${props => props.theme.white};
  transition: ${props => props.theme.transition};
`;
// transform: ${props => (props.notesDisplayed ? `scale(1,1)` : `scale(0,1)`)};

export default NotesDiv;
