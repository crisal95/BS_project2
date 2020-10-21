import React, { useState, useEffect } from "react";
import ApiHooks from "../../hooks/apiHooks";
import "./resultsCard.css";
import ButtonsFunctions from "../../hooks/buttonsFunctions";

const Trivia = ({ resultData }) => {
  const [redirect, setRedirect] = useState(false);
  const [buttonClicked, setButton] = useState("");

  //let buttonClicked = "";
  let button1 = "Try again!";
  let button2 = "Home";
  const id = localStorage.getItem("id");

  const buttonText = () => {
    if (resultData.status === "correct") {
      button1 = "Next question!";
      button2 = "Give up!";
    }
  };

  const click = (button) => {
    setButton(button);
    setRedirect(true);
  };

  if (redirect) {
    if (buttonClicked === "1") {
      if (resultData.status === "correct") {
  
        return ButtonsFunctions.redirectTrivia(id);
      }
      ApiHooks.deleteLocalStorage();
      return ButtonsFunctions.redirectTrivia(id);
    } else {
      if (resultData.status === "correct") {
        return ButtonsFunctions.redirectResults("retired");
      }
      ApiHooks.deleteLocalStorage();
      return ButtonsFunctions.redirectHome();
    }
  }

  buttonText();
  return (
    <div className="resultCard">
      <div className="title">
        <h3>{resultData.title}</h3>
      </div>
      <div className="textCard">
        <div className="textCard_title">
          <h3>{resultData.subtitle}</h3>
        </div>
        <div className="textCard_text">
          <p>{resultData.correctAns}</p>
          <p>{resultData.text}</p>
        </div>
      </div>
      <div className="cardButtons"></div>
      <button
        onClick={() => {
          click("1");
        }}
      >
        {button1}
      </button>
      <button
        onClick={() => {
          click("2");
        }}
      >
        {button2}
      </button>
    </div>
  );
};

export default Trivia;