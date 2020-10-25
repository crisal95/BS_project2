import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "../src/pages/home/home";
import ApiHooks from "../src/hooks/apiHooks";
import Trivia from "../src/pages/trivia/trivia";
import Result from "../src/pages/result/result";
import Win from "../src/pages/win/win";
import 'font-awesome/css/font-awesome.min.css';





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
        <PrivateRoute path="/result">
          <Result />
        </PrivateRoute>
        <WinRoute path="/win">
          <Win />
        </WinRoute>
      </Switch>
    </React.StrictMode>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
  </Router>,
  document.getElementById("root")
);

function PrivateRoute({ children, ...rest }) {
  const bool = ApiHooks.ResultAccess();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        bool ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function WinRoute({ children, ...rest }) {
  const bool = ApiHooks.RouteCheck();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        bool ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
