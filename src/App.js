import React from "react";
import Navigator from "./globals/components/Nagivator";
import { BrowserRouter } from "react-router-dom";
import LanguageContext from "./context/LanguageContext";
import NavBar from "./globals/components/NavBar";

function App() {
  return (
    <LanguageContext>
      <BrowserRouter>
        <NavBar />
        <Navigator />
      </BrowserRouter>
    </LanguageContext>
  );
}
export default App;
