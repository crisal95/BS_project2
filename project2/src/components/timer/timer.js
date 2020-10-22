import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

const Timer = () => {
  const [timer, setTimer] = useState(30);
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
  },[timer]);

  if (redirect) {
    localStorage.setItem("result","true");
    localStorage.setItem("pageStatus", "4");
    return (
        <Redirect
          to={{
            pathname: "/result"
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
