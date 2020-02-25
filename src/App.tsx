import React from "react";
import Sidebar from "./components/Sidebar";
import Notes from "./components/Notes";
import Editor from "./components/Editor";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Container from "./styles/Container";

class App extends React.Component {
  state = {
    drawerOpen: true,
    notesDisplayed: true
  };

  toggleElement = (element: "drawerOpen" | "notesDisplayed") => {
    this.setState({ [element]: !this.state[element] });
  };

  render() {
    const { drawerOpen, notesDisplayed } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container className="container">
          <Sidebar drawerOpen={drawerOpen} toggleElement={this.toggleElement} />
          <Notes drawerOpen={drawerOpen} notesDisplayed={notesDisplayed} />
          <Editor
            drawerOpen={drawerOpen}
            notesDisplayed={notesDisplayed}
            toggleElement={this.toggleElement}
          />
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;

// $gradient: linear-gradient(180deg, #7b4397, #dc2430);
// $gradient2: linear-gradient(180deg, #141e30, #243b55);
// $white: #f2f2f2;
// $black: #141e30;
