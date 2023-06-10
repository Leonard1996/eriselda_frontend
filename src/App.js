import React from "react";
import Navigator from "./globals/components/Nagivator";
import { BrowserRouter } from "react-router-dom";
import LanguageContext from "./context/LanguageContext";
import NavBar from "./globals/components/NavBar";

function App() {
  return (
    // <div>
    //   <header>
    //     {state.isAuthenticated ? (
    //       <p>Successful logged in</p>
    //     ) : (
    //       <p>
    //         <button onClick={login}>Log In</button>
    //       </p>
    //     )}
    //   </header>
    // </div>
    <LanguageContext>
      <BrowserRouter>
        <NavBar />
        <Navigator />
      </BrowserRouter>
    </LanguageContext>
  );
}
export default App;
