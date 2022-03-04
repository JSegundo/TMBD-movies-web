import React, { createContext, useState } from "react";
import ReactDOM from "react-dom";
import "../src/assets/styles/index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

// import { ChakraProvider } from "@chakra-ui/provider";

// const theme = {
//   config: {
//     useSystemColorMode: false, // or true
//     initialColorMode: "ligth", //
//     cssVarPrefix: "chakra", // any string
//   },
// };

export const UserContext = createContext();

const Root = () => {
  const [user, setUser] = useState({});

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        {/* <ChakraProvider theme={theme}> */}
        <App />
        {/* </ChakraProvider> */}
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default ReactDOM.render(<Root />, document.getElementById("root"));
