import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About"
import Mywork from "./components/Mywork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      < Mywork/>
      < Contact />
      < Footer />
    </div>
  );
}

export default App;
