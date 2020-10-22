import React, { useState, useEffect } from "react";
import "./question.css";
import ButtonsFunctions from "../../hooks/buttonsFunctions";
import parse from 'html-react-parser';

const Trivia = ({ question }) => {
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState([]);
  const [redirect, setRedirect] = useState(false);
  let ans = [];
  let questionIndex = parseInt(localStorage.getItem("index"));
  localStorage.setItem("result", "false");

  useEffect(() => {
    if (question) {
      setAnswers(processData());
    }
  }, []);

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
      if(questionIndex === 9){
        localStorage.setItem("routeCheck", "true");
        return ButtonsFunctions.redirectWin();
      }
      localStorage.setItem("pageStatus","1");
      return ButtonsFunctions.RedirectResults();
    } else {
      localStorage.setItem("pageStatus","2");
      return ButtonsFunctions.RedirectResults();
    }
  };

  if (redirect) {
    localStorage.setItem("result", "true");
    return redirectTo();
  }

  return (
    answers && (
      <div className="questionContainer">
        <h3>{parse(question.question)}</h3>
        <div className="radioButtons" onChange={handleButtonChange}>
          {answers.map((item, iter) => (
            <div key={iter} className="radioButton">
              <input type="radio" value={item} name="option" /> {parse(item)}
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
