import React, { useState, useEffect } from "react";
import ApiHooks from "../../hooks/apiHooks";
import "./question.css";
import { Redirect } from "react-router-dom";

const Trivia = ({ question }) => {
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState([]);
  const [redirect, setRedirect] = useState(false);
  let ans = [];
  const id = 0;

  useEffect(() => {
    if (question) {
      setAnswers(processData());
    }
  }, [question]);

  function functionSort(a, b) {
    return 0.5 - Math.random();
  }
  const processData = () => {
    ans = [...question.incorrect_answers];
    ans.push(question.correct_answer);
    ans = ans.sort(functionSort);
    return ans;
  };

  const handleButtonChange = (e) => {
    setSelected(e.target.value);
  };
  const buttonClick = () => {
    setRedirect(true);
  };
  const redirectTo = () => {
      
    if (selected === question.correct_answer) {
        console.log("correct");
      return (
        <Redirect
          to={{
            pathname: "/result",
            search: "?answer=correct",
          }}
        />
      );
      //localStorage.setItem("index", localStorage.getItem("index") + 1);
    } else {
      return (
        <Redirect
          to={{
            pathname: "/result",
            search: "?answer=incorrect",
          }}
        />
      );
      //localStorage.removeItem("index");
      //localStorage.removeItem("questions");
    }
  };

  if (redirect) {
    return redirectTo();
  }

  return (
    answers && (
      <div className="triviaContainer">
        <h3>{question.question}</h3>
        <div className="radioButtons" onChange={handleButtonChange}>
          {answers.map((item, iter) => (
            <div key={iter} className="radioButton">
              <input type="radio" value={item} name="option" /> {item}
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            buttonClick();
          }}
        >
          Final answer
        </button>
      </div>
    )
  );
};

export default Trivia;
