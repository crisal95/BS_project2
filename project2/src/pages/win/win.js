import React, { useState } from "react";
import "./win.css";
import Prizes from "../../hooks/prizes";
import ApiHooks from "../../hooks/apiHooks";
import ButtonsFunctions from "../../hooks/buttonsFunctions";
import Confetti from "react-confetti";

const Win = () => {
  const [redirect, setRedirect] = useState(false);
  let prizeIndex = parseInt(localStorage.getItem("index"));
  let prize = Prizes.getCurrentPrize(prizeIndex);
  const width = window.innerWidth;
  const height = window.innerHeight;

  const click = () => {
    setRedirect(true);
  };

  if (redirect) {
    ApiHooks.deleteLocalStorage();
    return ButtonsFunctions.redirectHome();
  }
  return (
    <div className="winCard">
      <div className="confettiContent">
        <Confetti width={width} height={height} />
      </div>
      <div>
        <h3 className="wonTitle">You won!!!!!!</h3>
      </div>
      <div>
        <p>
          You have won {prize} dollars!!! You wanted to be millionaire, now you are
          richer than the guy from monopoly!!
        </p>
      </div>
      <div>
        <button
          onClick={() => {
            click();
          }}
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

export default Win;
