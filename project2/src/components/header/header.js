import React, { useState } from "react";
import "./header.css";
import Logo from "../../data/logo.png";
import routerFunctions from "../../hooks/buttonsFunctions";

const Header = () => {
  const [redirect, setRedirect] = useState(false);

  const click = () => {
    setRedirect(true);
  };

  if (redirect) {
    return routerFunctions.redirectHome();
  }

  return (
    <div className="header">
      <img className="logo"
        src={Logo}
        onClick={() => {
          click();
        }}
        alt="Trivia logo"
      ></img>
    </div>
  );
};

export default Header;
