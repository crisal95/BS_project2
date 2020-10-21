import React from "react";
import Prizes from "../data/prizes.json";

const getNextPrize = (currentPrize) => {
  const index = Prizes.indexOf(currentPrize);
  if (index !== Prizes.length - 1) {
    return Prizes[index];
  }
};

const getCurrentPrize = (index) => {
    return Prizes[index];
}

export default {
  getNextPrize,
  getCurrentPrize,
};
