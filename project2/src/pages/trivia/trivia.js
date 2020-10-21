import React, { useState, useEffect } from "react";
import ApiHooks from "../../hooks/apiHooks";
import "./trivia.css";
import Question from "../../components/question/question";
import Timer from "../../components/timer/timer";
import PrizesCard from "../../components/prizesCard/prizesCard";

const Trivia = () => {
  let id = window.location.href.split("id=").reverse()[0];
  const [list, setList] = useState(null);

  const getQuestions = ApiHooks.GetByCategory(id);
  localStorage.setItem("boolIndex", "false");

  useEffect(() => {
    if (getQuestions) {
      setList(getQuestions);
    }
  }, [getQuestions]);

  return (
    list && (
      <div className="triviaContainer">
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
