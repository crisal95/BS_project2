import React, { useState, useEffect } from "react";
import ApiHooks from "../../hooks/apiHooks";
import "./result.css";
import ResultsCard from "../../components/resultsCard/resultsCard";
import GetMessageData from "../../hooks/getMessageData";

const Result = () => {
  localStorage.setItem("index", JSON.parse(localStorage.getItem("index")) + 1);

  return (
    <div className="results">
      <ResultsCard resultData={GetMessageData()} />
    </div>
  );
};

export default Result;
