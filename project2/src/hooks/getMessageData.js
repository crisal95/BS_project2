import React from "react";

const getMessageData = () => {
  let status = window.location.href.split("answer=").reverse()[0];
  let prize = "100000";
  let data = {
    title: "",
    subTitle: "",
    text: "",
    status: status,
  };
  if (status === "correct") {
    data.title = "You have answered correctly!";
    data.subtitle = "Current reward";
    data.text =
      "Your current reward is " +
      prize +
      " dollars. Do you want to give up or keep playing?";
  } else if (status === "incorrect") {
    data.title = "You have answered incorrectly!";
    data.subtitle = "You lost";
    data.text = "You have lost all your rewards. Try again!";
  } else if (status === "retired") {
    data.title = "You have retired!";
    data.subtitle = "You lost. But you can keep your current rewards!";
    data.text = "You won " + prize + " dollars! Try again!";
    if (prize === "0") {
      data.subtitle = "You lost. And you didn´t win any money!";
      data.text = "Try again!";
    }
  } else {
    data.title = "The time is up!";
    data.subtitle = "You lost all your rewards!";
    data.text = "Try again!";
    if (prize === "0") {
      data.subtitle =
        "You lost. And you didn´t lose any awards because you did not have any!";
    }
  }
  return data;
};
 export default getMessageData;