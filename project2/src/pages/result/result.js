import React, { useState } from "react";
import "./result.css";
import GetMessageData from "../../hooks/getMessageData";
import ButtonsFunctions from "../../hooks/buttonsFunctions";
import parse from "html-react-parser";
import Confetti from "../../components/confetti/confetti";
import ApiHooks from "../../hooks/apiHooks";

const Result = () => {
  localStorage.setItem("result", "true");
  const [redirect, setRedirect] = useState(false);
  const [buttonClicked, setButton] = useState("");
  const { updateMessage, messageData } = GetMessageData();
  

  let button1 = "Try again!";
  let button2 = "Home";
  const id = localStorage.getItem("id");

  const buttonText = () => {
    if (messageData && messageData.status === "1") {
      button1 = "Next question!";
      button2 = "Give up!";
    }
  };

  const click = (button) => {
    setButton(button);
    if (messageData.status === "1" && button === "2") {
      localStorage.setItem("pageStatus", "3");
      updateMessage();
    } else {
      setRedirect(true);
    }
  };

  if (redirect) {
    if (buttonClicked === "1") {
      if (messageData.status === "1") {
        localStorage.setItem("timer","90");
        return ButtonsFunctions.redirectTrivia(id);
      }
      localStorage.setItem("retry","true");
      localStorage.setItem("timer","90");
      ApiHooks.deleteLocalStorage();
      return ButtonsFunctions.redirectTrivia(id);
    } else {
      ApiHooks.deleteLocalStorage();
      return ButtonsFunctions.redirectHome();
    }
  }

  buttonText();
  return (
    messageData && (
      <div className="results">
        <div className="resultCard">
          {messageData.status === "1" && (
            <Confetti />
          )}
          <div className="title">
            <h3>{messageData.title}</h3>
          </div>
          <div className="textCard">
            <div className="textCard_title">
              <h3>{messageData.subtitle}</h3>
            </div>
            <div className="textCard_text">
              <p>{parse(messageData.correctAns)}</p>
              <p>{messageData.text}</p>
            </div>
          </div>
          <div className="cardButtons"></div>
          <button
            className="resultButton"
            onClick={() => {
              click("1");
            }}
          >
            {button1}
          </button>
          <button
            className="resultButton"
            onClick={() => {
              click("2");
            }}
          >
            {button2}
          </button>
        </div>
      </div>
    )
  );
};

export default Result;
