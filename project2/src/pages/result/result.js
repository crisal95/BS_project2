import React, { useState, useEffect } from "react";
import "./result.css";
import ResultsCard from "../../components/resultsCard/resultsCard";
import GetMessageData from "../../hooks/getMessageData";

const Result = () => {

  return (
    <div className="results">
      <ResultsCard resultData={GetMessageData()}/>
    </div>
  );
};

export default Result;
