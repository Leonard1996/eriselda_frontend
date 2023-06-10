import React from "react";

const defaultConstext = { language: "en", error: null, isAuthenticated: false, user: {} };
const Context = React.createContext(defaultConstext);
export { Context };

export default function LanguageContext({ children }) {
  const [state, setState] = React.useState(defaultConstext);
  return <Context.Provider value={{ state, setState }}>{children}</Context.Provider>;
}
