import React, { useEffect, useState } from "react";

import "./App.scss";

import { About, Contacts, Footer, Header, Projects, Skills } from "./views";
import { Navbar } from "./components";

const App = () => {
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    theme === "" ? setTheme("dark-theme") : setTheme("");
  };

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
