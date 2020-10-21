import React, { useState, useEffect } from "react";
import ButtonsFunctions from "../../hooks/buttonsFunctions";
import { Redirect } from "react-router-dom";

const Timer = () => {
  const [timer, setTimer] = useState(300);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (timer !== 0) {
      const timerTimeOut = setTimeout(() => {
        if (timer !== 0) {
          setTimer(timer - 1);
        }
      }, 1000);
    } else {
      setRedirect(true);
    }
  });

  if (redirect) {
    return (
        <Redirect
          to={{
            pathname: "/result",
            search: "?answer=" + "",
          }}
        />
      );
  }
  return (
    <div className="timerContainer">
      <h3>Your time: {timer} seconds</h3>
    </div>
  );
};

export default Timer;
