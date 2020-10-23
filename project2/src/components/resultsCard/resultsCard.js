import React, { useState, useEffect } from "react";
import ApiHooks from "../../hooks/apiHooks";
import "./resultsCard.css";
import ButtonsFunctions from "../../hooks/buttonsFunctions";
import parse from "html-react-parser";
import Confetti from "react-confetti";
import GetMessageData from "../../hooks/getMessageData";

const Trivia = ({ resultData, onChange }) => {
  const [redirect, setRedirect] = useState(false);
  const [buttonClicked, setButton] = useState("");
  const width = window.innerWidth;
  const height = window.innerHeight;
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(resultData);
  }, [resultData]);

  let button1 = "Try again!";
  let button2 = "Home";
  const id = localStorage.getItem("id");

  const buttonText = () => {
    if (resultData.status === "1") {
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
      if (resultData.status === "1") {
        return ButtonsFunctions.redirectTrivia(id);
      }
      ApiHooks.deleteLocalStorage();
      return ButtonsFunctions.redirectTrivia(id);
    } else {
      if (resultData.status === "1") {
        localStorage.setItem("pageStatus", "3");
        onChange(GetMessageData.setMessageData("3"));
        return null;
      }
      ApiHooks.deleteLocalStorage();
      return ButtonsFunctions.redirectHome();
    }
  }

  buttonText();
  return (
    data && (
      <div className="resultCard">
        {data.status === "1" && <Confetti width={width} height={height} />}
        <div className="title">
          <h3>{data.title}</h3>
        </div>
        <div className="textCard">
          <div className="textCard_title">
            <h3>{data.subtitle}</h3>
          </div>
          <div className="textCard_text">
            <p>{parse(data.correctAns)}</p>
            <p>{data.text}</p>
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
    )
  );
};

export default Trivia;
