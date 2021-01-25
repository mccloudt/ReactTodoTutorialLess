import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Card from "./Card";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <App /> */}
    <Card />
  </StrictMode>,
  rootElement
);
