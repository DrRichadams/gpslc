import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Styles_importer from "../styles/Styles_importer";
import TopNavBar from "./commons/TopNavBar";
import A1_Home from "./A1_Home"
import Footer from "./commons/Footer";

function App() {
  return (
    <BrowserRouter>
    <TopNavBar />
      <div className="App">
        <Styles_importer />
        <Routes>
          <Route exact path="/" element={<A1_Home />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
