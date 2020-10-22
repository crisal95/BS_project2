import React from 'react';
import ApiHooks from "../hooks/apiHooks";
import { BrowserRouter as  Route, Redirect } from "react-router-dom";

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
  
  export default {
      PrivateRoute,
      WinRoute,
  };