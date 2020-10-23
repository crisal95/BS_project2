import React, { useState, useEffect } from "react";
import ApiHooks from "../../hooks/apiHooks";
import "./trivia.css";
import Question from "../../components/question/question";
import Timer from "../../components/timer/timer";
import PrizesCard from "../../components/prizesCard/prizesCard";
import Header from "../../components/header/header";

const Trivia = () => {
  let id = window.location.href.split("id=").reverse()[0];
  const [list, setList] = useState(null);

  const getQuestions = ApiHooks.GetByCategory(id);
  localStorage.setItem("boolIndex", "false");

  useEffect(() => {
    if (getQuestions) {
      setList(getQuestions);
    }
    if (localStorage.getItem("retry") === "true") {
      localStorage.setItem("index", "0");
      localStorage.setItem("retry", "false");
    }
  }, [getQuestions]);

  return (
    list && (
      <div className="triviaContainer">
        <Header />
        <div className="questionCard">
          <Question question={list[localStorage.getItem("index")]} />
        </div>
        <div className="extraItems">
          <Timer />
          <PrizesCard />
        </div>
      </div>
    )
  );
};

export default Trivia;
