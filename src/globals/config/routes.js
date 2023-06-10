import React from "react";
import Authenticate from "../../pages/Authenticate/Authenticate";
import Home from "../../pages/Home/Home";

export const routes = [
  {
    name: "Authenticate",
    path: "/",
    private: false,
    element: <Authenticate />,
  },
  {
    name: "Home",
    path: "/home",
    private: true,
    element: <Home />,
  },
];
