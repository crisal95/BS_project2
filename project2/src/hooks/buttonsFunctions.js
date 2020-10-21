import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

const redirectHome = () => {
    return (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      );
}

const redirectTrivia = (id) => {
    return (
        <Redirect
          to={{
            pathname: "/trivia",
            search: "?id=" + id,
          }}
        />
      );
}

const redirectResults = (status) => {
    return (
        <Redirect
          to={{
            pathname: "/result",
            search: "?answer=" + status,
          }}
        />
      );
}



export default {
redirectHome,
redirectTrivia,
redirectResults,
};