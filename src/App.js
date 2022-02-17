import React, { useState } from "react";
import "./App.scss";
import Data from "./Data";
import List from "./List";
import NavBar from "./NavBar";
import Button from "react-bootstrap/Button";

function App() {
  const [people, setPeople] = useState(Data);

  return (
    <div className="app">
      <NavBar />
      <div className="container">
        <h3>{people.length} birthdays today</h3>
        <br />
        <List people={people} />
        <Button variant="danger" onClick={() => setPeople([])}>
          Clear All
        </Button>
      </div>
    </div>
  );
}

export default App;
