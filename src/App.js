import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import MonsterList from "./component/MonsterList/MonsterList";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route exact path="/" element={<MonsterList/>} />
          <Route exact path="/add-monster" element={ <h2>Add Monster</h2>} />
          <Route exact path="/edit-monster" element={<h2>Edit Monster</h2>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
