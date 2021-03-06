import React from "react";
import { Redirect } from "react-router-dom";

const redirectHome = () => {
  return (
    <Redirect
      to={{
        pathname: "/",
      }}
    />
  );
};

const redirectTrivia = (id) => {
  if (localStorage.getItem("index")) {
    if (localStorage.getItem("boolIndex") === "false") {
      localStorage.setItem("boolIndex", "true");
      let prizeIndex = parseInt(localStorage.getItem("index"));
      localStorage.setItem("index", prizeIndex + 1);
    }
  }

  return (
    <Redirect
      to={{
        pathname: "/trivia",
        search: "?id=" + id,
      }}
    />
  );
};

const RedirectResults = () => {
  return (
    <Redirect
      to={{
        pathname: "/result"
      }}
    />
  );
};

const redirectWin = () => {
  return (
    <Redirect
      to={{
        pathname: "win",
      }}
    />
  );
};

export default {
  redirectHome,
  redirectTrivia,
  RedirectResults,
  redirectWin,
};
