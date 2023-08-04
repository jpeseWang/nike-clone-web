import React from "react";
import "./App.css";
import { Header } from "./layouts/Header/Header";
import { Home } from "./layouts/Home/Home";
import { Footer } from "./layouts/Footer/Footer";
import { AppRoutes } from "./routes/AppRoutes";
function App() {
  return (
    <div className="App">
      <Header />
      {/* Routing */}
      <AppRoutes />
      {/* Routing */}
      <Footer />
    </div>
  );
}

export default App;
