import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../src/pages/home/home";
import ApiHooks from "../src/hooks/apiHooks";
import Trivia from "../src/pages/trivia/trivia";
import Result from "../src/pages/result/result";
import Win from "../src/pages/win/win";
import Header from "../src/components/header/header";

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
      <Route path="/result">
        <Result />
      </Route>
      <Route path="/win">
        <Win />
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
