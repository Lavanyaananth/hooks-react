import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import State from "./State";
import Effect from "./Effect";
import Context from "./Context";
const App = () => {
  return (
    <div>
      <State></State>
      <Effect></Effect>
      <Context></Context>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
