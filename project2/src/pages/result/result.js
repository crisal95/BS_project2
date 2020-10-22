import React, { useState, useEffect } from "react";
import "./result.css";
import ResultsCard from "../../components/resultsCard/resultsCard";
import GetMessageData from "../../hooks/getMessageData";

const Result = () => {


  const [data,setData] = useState(null);
  const messageData = GetMessageData();
  localStorage.setItem("result", "true");

  useEffect(() => {
    if (messageData) {
      setData(messageData);
     
    }
  }, []);


  return (
    data && (
    <div className="results">
      <ResultsCard resultData={GetMessageData()}/>
    </div>)
  );
};

export default Result;
