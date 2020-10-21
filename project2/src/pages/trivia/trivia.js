import React, { useState, useEffect } from "react";
import ApiHooks from "../../hooks/apiHooks";
import "./trivia.css";
import Question from "../../components/question/question";

const Trivia = () => {
  let id = window.location.href.split("id=").reverse()[0];
  const [list, setList] = useState(null);

  const getQuestions = ApiHooks.GetByCategory(id);

  useEffect(() => {
    if (getQuestions) {
      setList(getQuestions);

    }
  },[getQuestions]);

  return (
    list && (
    <div className="triviaContainer">
      <p>Hola soy la trivia</p>
      <Question question={list[localStorage.getItem("index")]} />
    </div>

    )
  );
};

export default Trivia;
