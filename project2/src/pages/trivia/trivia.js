import React, { useState, useEffect } from "react";
import ApiHooks from "../../hooks/apiHooks";
import "./trivia.css";

const Trivia = () => {
  let id = window.location.href.split("id=").reverse()[0];
  return (
    <div className="triviaContainer">
      <p>Hola soy la trivia</p>
    </div>
  );
};

export default Trivia;
