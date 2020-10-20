import React, { useState, useEffect } from "react";
import ApiHooks from "../../hooks/apiHooks";
import './result.css';


 const Result = () => {
localStorage.setItem("index",JSON.parse(localStorage.getItem("index"))+1);
  return (
    <div className="results">
          Aqui van los resultados woooo
    </div>
  );
};

export default Result;
