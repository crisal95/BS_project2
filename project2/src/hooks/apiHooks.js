import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";

const BASE_URL =
  "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple";

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

const GetByCategory = ({ id }) => {
  const [questions, setQuestions] = useState([]);
  let bool = true;

  useEffect(() => {
    if (!localStorage.getItem("index")) {
      fetch(BASE_URL + `&` + id)
        .then((resp) => resp.json())
        .then((res) => {
          setQuestions(res.results);
          localStorage.setItem("questions", JSON.stringify(res.results));
          localStorage.setItem("index", 0);
        })
        .catch((ex) => {
          console.error(ex);
        });
    }
  }, []);

  if (localStorage.getItem("questions")) {
   return JSON.parse(localStorage.getItem("questions"));
  }
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

export default {
  getToken,
  GetByCategory,
  GetCategories,
};
