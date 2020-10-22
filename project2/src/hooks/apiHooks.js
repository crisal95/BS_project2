import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";

const BASE_URL = "https://opentdb.com/api.php?amount=10&type=multiple";

function getToken() {
  //const [token, setToken] = useState("");
  if (!Cookies.get("token")) {
    fetch(`https://opentdb.com/api_token.php?command=request`)
      .then((resp) => resp.json())
      .then((res) => {
        Cookies.set("token", res.token, {
          expires: 0.5,
        });
      })
      .catch((ex) => {
        console.error(ex);
      });
  }
}

const GetByCategory = () => {
  let id = window.location.href.split("id=").reverse()[0];
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("index")) {
      fetch(BASE_URL + `&category=` + id)
        .then((resp) => resp.json())
        .then((res) => {
          setQuestions(res.results);
          localStorage.setItem("questions", JSON.stringify(res.results));
          localStorage.setItem("index", 0);
        })
        .catch((ex) => {
          console.error(ex);
        });
    } else {
      setQuestions(JSON.parse(localStorage.getItem("questions")));
    }
  }, []);

  return questions;
};

const GetCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(`https://opentdb.com/api_category.php`)
      .then((resp) => resp.json())
      .then((res) => {
        setCategories(res.trivia_categories);
      })
      .catch((ex) => {
        console.error(ex);
      });
  }, []);
  return categories;
};

const deleteLocalStorage = () => {
  localStorage.removeItem("index");
  localStorage.removeItem("questions");
};

const GetIndexCorrectAnswer = (index) => {
  const question = JSON.parse(localStorage.getItem("questions"));
  return question[index].correct_answer;
}

const ResultAccess = () => {
  let bool = false;
  if(localStorage.getItem("result") === "true"){
    bool = true;
  }
  return bool;
  }
  const RouteCheck = () => {
    let bool = false;
    if(localStorage.getItem("routeCheck") === "true"){
      bool = true;
    }
    return bool;
    }

export default {
  getToken,
  GetByCategory,
  GetCategories,
  deleteLocalStorage,
  GetIndexCorrectAnswer,
  ResultAccess,
  RouteCheck,
};
