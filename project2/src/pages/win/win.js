import React, { useState } from "react";
import './win.css';
import Prizes from "../../hooks/prizes"
import ApiHooks from "../../hooks/apiHooks";
import ButtonsFunctions from "../../hooks/buttonsFunctions";

const Win = () => {
  const [redirect, setRedirect] = useState(false);
  let prizeIndex = parseInt(localStorage.getItem("index"));
  let prize = Prizes.getCurrentPrize(prizeIndex);

  const click = () => {
    setRedirect(true);
  };

  if (redirect) {
    ApiHooks.deleteLocalStorage();
    return ButtonsFunctions.redirectHome();
  }
  return (
    <div className="winCard">
      <h3 className="wonTitle">You won!!!!!!</h3>
      <p>
        You have won {prize} dollars!!! You wanted to be millionaire, you are
        richer than the guy from monopoly
      </p>
      <button
        onClick={() => {
          click();
        }}
      >Back to home</button>
    </div>
  );
};

export default Win;