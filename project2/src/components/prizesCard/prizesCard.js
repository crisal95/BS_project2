import React from "react";
import "./prizesCard.css";
import Prizes from "../../data/prizes.json";

const PrizesCard = () => {
    const actualIndex = localStorage.getItem("index");
  return <div className="prizeCard">
      <div className="title"><h3>Yor current reward</h3></div>
      <div className={actualIndex==="0" ? 'actualPrizeText' : 'prizeText'}>
      <p className="prizeText">0</p>
      </div>
      {Prizes.map((item,iter) => (
          <div key={iter} className={actualIndex===(iter+1) ? 'actualPrizeText' : 'prizeText'}>
            <p className>{item}</p>
          </div>
        ))}
  </div>;
};

export default PrizesCard;
