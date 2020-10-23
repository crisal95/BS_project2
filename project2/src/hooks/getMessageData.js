import React, { useState, useEffect } from "react";
import Prizes from "../hooks/prizes";
import ApiHooks from "../hooks/apiHooks";

const GetMessageData = () => {
  let status = localStorage.getItem("pageStatus");
  console.log(status);
  let prizeIndex = parseInt(localStorage.getItem("index"));
  let prize = Prizes.getCurrentPrize(prizeIndex);
  const correctAnswer = ApiHooks.GetIndexCorrectAnswer(prizeIndex);
  const [messageData, setData] = useState(null);

  let data = {
    title: "",
    subTitle: "",
    correctAns: "Correct answer was: " + correctAnswer,
    text: "",
    status: status,
  };

  const setMessageData = (status) => {
    console.log(status);
    if (status === "1") {
      data.title = "You have answered correctly!";
      data.subtitle = "Current reward";
      data.text =
        "Your current reward is " +
        prize +
        " dollars. Do you want to give up or keep playing?";
    } else if (status === "2") {
      data.title = "You have answered incorrectly!";
      data.subtitle = "You lost";
      data.text = "You have lost all your rewards. Try again!";
    } else if (status === "3") {
      data.title = "You have giveup!";
      data.subtitle = "You lost. But you can keep your current rewards!";
      data.text = "You won " + prize + " dollars! Try again!";

      if (prizeIndex === "0") {
        data.subtitle = "You lost. And you didn´t win any money!";
        data.text = "Try again!";
      }
    } else {
      data.title = "The time is up!";
      data.subtitle = "You lost all your rewards!";
      data.text = "Try again!";
      if (prizeIndex === "0") {
        data.subtitle =
          "You lost. And you didn´t lose any awards because you did not have any!";
      }
    }
  };

  useEffect(() => {
    console.log("llegue al effect de getMessageData");
    setMessageData(status);
    setData(data);
  }, []);
  const updateMessage = () => {
    let updateStatus = localStorage.getItem("pageStatus");
    setMessageData(updateStatus);
  };

  return messageData;
};

const setMessageData = (status) => {
  let prizeIndex = parseInt(localStorage.getItem("index"));
  let prize = Prizes.getCurrentPrize(prizeIndex);
  const correctAnswer = ApiHooks.GetIndexCorrectAnswer(prizeIndex);
  console.log(status);

  let data = {
    title: "",
    subTitle: "",
    correctAns: "Correct answer was: " + correctAnswer,
    text: "",
    status: status,
  };
  if (status === "1") {
    data.title = "You have answered correctly!";
    data.subtitle = "Current reward";
    data.text =
      "Your current reward is " +
      prize +
      " dollars. Do you want to give up or keep playing?";
  } else if (status === "2") {
    data.title = "You have answered incorrectly!";
    data.subtitle = "You lost";
    data.text = "You have lost all your rewards. Try again!";
  } else if (status === "3") {
    data.title = "You have giveup!";
    data.subtitle = "You lost. But you can keep your current rewards!";
    data.text = "You won " + prize + " dollars! Try again!";

    if (prizeIndex === "0") {
      data.subtitle = "You lost. And you didn´t win any money!";
      data.text = "Try again!";
    }
  } else {
    data.title = "The time is up!";
    data.subtitle = "You lost all your rewards!";
    data.text = "Try again!";
    if (prizeIndex === "0") {
      data.subtitle =
        "You lost. And you didn´t lose any awards because you did not have any!";
    }
  }
  return data;
};


export default {GetMessageData,setMessageData};
