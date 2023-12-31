import React, { useState } from "react";
import { Context } from "../../context/LanguageContext";
import EN from "../../assets/images/EN.png";
import AL from "../../assets/images/AL.jpg";
import { useNavigate } from "react-router-dom";
import Notification from "../../pages/Notification";

export default function NavBar() {
  const { setState, state } = React.useContext(Context);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

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
        <div style={{ marginRight: 10 }}>
          <Notification />
        </div>
        <div onClick={() => handleLanguageSet("al")} style={alStyle}>
          AL
          <img src={AL} width={20} style={{ marginLeft: 8 }} />
        </div>
        <div style={{ margin: "5px 10px" }}>|</div>
        <div onClick={() => handleLanguageSet("en")} style={enStyle}>
          EN
          <img src={EN} width={20} style={{ marginLeft: 8 }} />
        </div>
      </div>
    </>
  );
}
