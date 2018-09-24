import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render((
  <Router><App /></Router>
), document.getElementById("root"));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}