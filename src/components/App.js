import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Styles_importer from "../styles/Styles_importer";
import TopNavBar from "./commons/TopNavBar";
import A1_Home from "./A1_Home"
import Footer from "./commons/Footer";
import A2_services from "./A2_services";
import A3_events from "./A3_events";
import A4_about from "./A4_about";
import A5_contact from "./A5_contact";

function App() {
  return (
    <BrowserRouter>
    <TopNavBar />
      <div className="App">
        <Styles_importer />
        <Routes>
          <Route exact path="/" element={<A1_Home />} />
          <Route path="/services" element={<A2_services />} />
          <Route path="/events" element={<A3_events />} />
          <Route path="/about" element={<A4_about />} />
          <Route path="/contact" element={<A5_contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
