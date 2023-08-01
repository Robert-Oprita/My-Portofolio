import React from "react";
import Home from "./views/Home";
import { Button, Card } from "flowbite-react";
import AboutMe from "./views/AboutMe";
import Skills from "./views/Skills";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import Footer from "./views/Footer";
import Navbar from "./views/Nav";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
