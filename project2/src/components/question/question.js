import React, { useState, useEffect } from "react";
import "./question.css";
import ButtonsFunctions from "../../hooks/buttonsFunctions";

const Trivia = ({ question }) => {
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState([]);
  const [redirect, setRedirect] = useState(false);
  let ans = [];
  let questionIndex = parseInt(localStorage.getItem("index"));

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
        return ButtonsFunctions.redirectWin();
      }
      return ButtonsFunctions.redirectResults("correct");
    } else {
      return ButtonsFunctions.redirectResults("incorrect");
    }
  };

  if (redirect) {
    return redirectTo();
  }

  return (
    answers && (
      <div className="questionContainer">
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
