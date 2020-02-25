import styled from "styled-components";
import Icon from "./Icon";

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
  // background-color: ${props => props.theme.colors.textDarkColor};
  padding: 1em;
  transition: ${props => props.theme.transition};
`;

export const EditorActions = styled.div<{notesDisplayed: boolean}>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2.5em;
  padding: 0.25em 0.5em;
  display: flex;
  color: ${({theme}) => theme.colors.textDarkColor};
  font-weight: 500;
  justify-content: space-between;
  align-items: center;

  .editorActionDisplay {
    display: flex;
    justify-content: "flex-start";
    align-items: center;
    width: ${({notesDisplayed}) => notesDisplayed ? "30%" : "15%"};
  }

  .icon {
    border-right: ${({theme}) => `1px solid ${theme.colors.textDarkColor}`};
    padding-right: 0.5em;
  }

  .editorActionsText {
    padding: 0;
    margin: 0.5em;
  }

  svg {
    fill: ${({theme}) => theme.colors.textDarkColor};
  }
`;

export default CustomEditor;
