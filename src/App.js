import "./App.css";
import React, { useState } from "react";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects"

function App() {
  const [view, setView] = useState(<Home />)
  const goHome = () => setView(<Home />)
  const goProjects = () => setView(<Projects />)
  return (
    <>
      <NavBar goHome={goHome} goProjects={goProjects} />
      {view}
    </>
  );
}

export default App;
