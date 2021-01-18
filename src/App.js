import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Directory from "./pages/Directory";
import Wrapper from "./components/Wrapper";
import Table from "./components/Table"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faNewspaper)

const groceries = [
  {
    id: 1,
    name: "Milk",
    purchased: true
  },
  {
    id: 2,
    name: "Eggs",
    purchased: true
  },
  {
    id: 3,
    name: "Cheese",
    purchased: false
  },
  {
    id: 4,
    name: "Cake Mix",
    purchased: false
  },
  {
    id: 5,
    name: "Carrots",
    purchased: false
  },
  {
    id: 6,
    name: "Juice",
    purchased: true
  }
];

function App() {
  return (
    <Wrapper>
    <Router>
      <div>
        <NavBar>New York Times</NavBar>
      </div>
      <div>
      <Table groceries={groceries}></Table>
      </div>
    </Router>
    </Wrapper>
  );
}

export default App;
