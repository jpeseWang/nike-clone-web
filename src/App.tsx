import React from "react";
import "./App.css";
import { Header } from "./layouts/Header/Header";
import { Home } from "./layouts/Home/Home";
import { Footer } from "./layouts/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
