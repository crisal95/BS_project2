import React, { useState, useEffect } from "react";
import "./result.css";
import ResultsCard from "../../components/resultsCard/resultsCard";
import GetMessageData from "../../hooks/getMessageData";

const Result = () => {
  const [data, setData] = useState(null);
  let messageData = GetMessageData.GetMessageData();
  localStorage.setItem("result", "true");

  useEffect(() => {
    if (messageData) {
      setData(messageData);
    }
  }, [messageData]);


  const changeData = (dataM) => {
    //La data si la trae bien el problema es actualizar
    console.log(dataM);
    messageData = dataM;
    setData(dataM);
  };

  return (
    data && (
      <div className="results">
        <ResultsCard resultData={data} onChange={changeData} />
      </div>
    )
  );
};

export default Result;
