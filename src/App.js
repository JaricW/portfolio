import "./App.css";
import React, { useState } from "react";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects"
import About from "./Components/About"

function App() {
  const goProjects = () => setView(<Projects />)
  const [view, setView] = useState(<Home goProjects={goProjects} />)
  const goHome = () => setView(<Home goProjects={goProjects} />)
  const goAbout = () => setView(<About />)

  return (
    <>
      <NavBar goHome={goHome} goProjects={goProjects} goAbout={goAbout} />
      {view}
    </>
  );
}

export default App;
