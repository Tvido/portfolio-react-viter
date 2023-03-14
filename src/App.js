import React from "react";
import { About, Contacts, Footer, Header, Projects, Skills } from "./views";

const App = () => {
  return (
    <div className="app">
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
