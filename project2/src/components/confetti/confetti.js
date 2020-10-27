import React, {useEffect, useState} from 'react';
import Confetti from "react-confetti";

const ConfettiResponsive = () => {
    const [width, setWindowWidth] = useState(0);
  const [height, setWindowHeight] = useState(0);
  let resizeWindow = () => {

    setWindowWidth(0);
    setWindowHeight(0);
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  //Listen when the screen size change and update state variables
  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);

  }, []);

  return <div> <Confetti width={width} height={height} /></div>;
}

export default ConfettiResponsive;