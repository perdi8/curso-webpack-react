import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MyContextProvider } from "./common-components/context-provider/dashboard.context";

ReactDOM.render(
  <MyContextProvider>
    <App />
  </MyContextProvider>,
  document.getElementById("app")
);
