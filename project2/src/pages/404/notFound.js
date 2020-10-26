import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../data/logo.png";
import "./notFound.css";

const NotFound = () => {
  return (
    <div className="notFound">
      <img
        className="logo"
        src={Logo}
        alt="Trivia logo"
      ></img>
      <br/>
      <h1>Page not found 404</h1>
      <br/>
      <Link className="homeLink" to="/">Back to home</Link>
    </div>
  );
};

export default NotFound;
