import React from "react";
import { Context } from "../../context/LanguageContext";

export default function NavBar() {
  const { setState, state } = React.useContext(Context);

  const handleLanguageSet = (language) => {
    setState((prevState) => ({
      ...prevState,
      language,
    }));
  };

  const alStyle = {
    color: state.language === "al" ? "red" : "",
  };

  const enStyle = {
    color: state.language === "en" ? "blue" : "",
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          borderBottom: "2px solid #eee",
          alignItems: "center",
          padding: "16px",
          cursor: "pointer",
          color: "#aaa",
        }}
      >
        <div onClick={() => handleLanguageSet("al")} style={alStyle}>
          AL
        </div>
        <div style={{ margin: "0 10px" }}>|</div>
        <div onClick={() => handleLanguageSet("en")} style={enStyle}>
          EN
        </div>
      </div>
    </>
  );
}
