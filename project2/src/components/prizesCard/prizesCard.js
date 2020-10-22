import React from "react";
import "./prizesCard.css";
import Prizes from "../../data/prizes.json";

const PrizesCard = () => {
    const actualIndex = localStorage.getItem("index");
const getBool = (iter) => {
    let bool = false;
    if(parseInt( actualIndex) === iter+1){
        console.log(iter);
        bool = true;
    }
    return bool;
}

  return <div className="prizeCard">
      <div className="title"><h3>Yor current reward</h3></div>
      <div className={actualIndex==="0" ? 'actualPrizeText' : 'prizeText'}>
      <p className="prizeText">0</p>
      </div>
      {Prizes.map((item,iter) => (
          <div key={iter} className={getBool(iter) ? 'actualPrizeText' : 'prizeText'}>
            <p className>{item}</p>
          </div>
        ))}
  </div>;
};

export default PrizesCard;
