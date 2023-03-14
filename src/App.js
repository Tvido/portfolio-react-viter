import React from "react";
import { About, Contacts, Footer, Header, Projects, Skills } from "./views";
import { Navbar } from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
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
