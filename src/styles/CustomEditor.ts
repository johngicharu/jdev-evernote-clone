import styled from "styled-components";

const CustomEditor = styled.section<{
  drawerOpen: boolean;
  notesDisplayed: boolean;
}>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: ${props => {
    if (props.drawerOpen) {
      return props.notesDisplayed
        ? `${props.theme.notesWidth + props.theme.drawerOpenWidth}px`
        : `${props.theme.drawerOpenWidth}px`;
    } else {
      return props.notesDisplayed
        ? `${props.theme.notesWidth + props.theme.drawerClosedWidth}px`
        : `${props.theme.drawerClosedWidth}px`;
    }
  }};
  right: 0;
  background-color: ${props => props.theme.black};
  padding: 1em;
  transition: ${props => props.theme.transition};
`;

export default CustomEditor;
