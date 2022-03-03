import React, { createContext, useState } from "react";
import ReactDOM from "react-dom";
import "../src/assets/styles/index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

export const UserContext = createContext();

const Root = () => {
  const [user, setUser] = useState({});

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <App />
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default ReactDOM.render(<Root />, document.getElementById("root"));
