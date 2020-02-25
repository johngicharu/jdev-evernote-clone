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
    drawerOpen: false,
    notesDisplayed: false,
    notebooks: [{id: "213fc1", title: "Todos"}, {id: "qxwe8y29cex", title: "Notes Collection"}],
    selectedNotebook: "",
    notes: [ 
      {id: "askxcybeiqwbye", title: "Note 1", content: "Note Content", notebook: "213fc1", date: `${new Date(Date.now())}`},
      {id: "askxcybeiqwbye", title: "Note 2", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis doloremque nemo voluptas sit obcaecati consectetur ipsum incidunt nisi, commodi mollitia eaque, sequi voluptatum iure cupiditate corrupti laudantium necessitatibus facilis modi!", notebook: "", date: `${new Date(Date.now())}`},
      {id: "askxcybeiqwbye", title: "Note 3", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis doloremque nemo voluptas sit obcaecati consectetur ipsum incidunt nisi, commodi mollitia eaque", notebook: "qxwe8y29cex", date: `${new Date(Date.now())}`},
      {id: "askxcybeiqwbye", title: "Note 4", content: "Note Content", notebook: "", date: `${new Date(Date.now())}`},
      {id: "askxcybeiqwbye", title: "Note 5", content: "Note Content", notebook: "213fc1", date: `${new Date(Date.now())}`},
      {id: "askxcybeiqwbye", title: "Note 6", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis doloremque nemo voluptas sit obcaecati consectetur ipsum incidunt nisi, commodi mollitia eaque, sequi voluptatum iure cupiditate corrupti laudantium necessitatibus facilis modi!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis doloremque nemo voluptas sit obcaecati consectetur ipsum incidunt nisi, commodi mollitia eaque, sequi voluptatum iure cupiditate corrupti laudantium necessitatibus facilis modi!", notebook: "", date: `${new Date(Date.now())}`},
      {id: "askxcybeiqwbye", title: "Note 7", content: "Note Content", notebook: "qxwe8y29cex", date: `${new Date(Date.now())}`},
      {id: "askxcybeiqwbye", title: "Note 8", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis doloremque nemo", notebook: "213fc1", date: `${new Date(Date.now())}`},
      {id: "acsdasd", title: "Note 8", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis doloremque nemo", notebook: "213fc1", date: `${new Date(Date.now())}`},
      {id: "wqcxyi2q3yecxiyn3e", title: "Note 8", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis doloremque nemo", notebook: "213fc1", date: `${new Date(Date.now())}`}
    ]
  };

  toggleElement = (element: "drawerOpen" | "notesDisplayed") => {
    this.setState({ [element]: !this.state[element] });
  };

  render() {
    const { drawerOpen, notesDisplayed, notebooks, selectedNotebook, notes } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container className="container">
          <Sidebar notebooks={notebooks} drawerOpen={drawerOpen} toggleElement={this.toggleElement} />
          <Notes drawerOpen={drawerOpen} notes={selectedNotebook.trim() !== "" ? notes.filter(note => note.notebook === selectedNotebook) : notes} notesDisplayed={notesDisplayed} />
          <Editor
            selectedNotebook={selectedNotebook}
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
