import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import About from "./componets/About/index";
import Nav from "./componets/Nav/index";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
