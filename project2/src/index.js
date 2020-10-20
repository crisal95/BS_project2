import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../src/pages/app/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../src/pages/home/home";
import ApiHooks from "../src/hooks/apiHooks";
import Trivia from "../src/pages/trivia/trivia";

ApiHooks.getToken();
ReactDOM.render(
  <Router>
      <React.StrictMode>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/trivia">
        <Trivia />
      </Route>
    </Switch>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
