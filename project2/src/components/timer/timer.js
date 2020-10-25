import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./timer.css";

const Timer = () => {
  const timer_time = 30;
  const setTimerTime = () => {
    const timer = parseInt(localStorage.getItem("timer"));
    if(timer > timer_time) return 30;
    if(timer < 30) return timer;
    return timer_time;
  }
  const [timer, setTimer] = useState( setTimerTime());
  const [redirect, setRedirect] = useState(false);


  useEffect(() => {
    if (timer !== 0) {
        setTimeout(() => {
        if (timer !== 0) {
          setTimer(timer - 1);
          localStorage.setItem("timer",timer-1);
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
      <h3><i className="fa fa-clock-o fa-2x icon" aria-hidden="true"></i> {timer} seconds</h3>
    </div>
  );
};

export default Timer;
