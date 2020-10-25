import { enc } from "crypto-js";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";

const BASE_URL = "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple";
var CryptoJS = require("crypto-js");

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
          var encrypted = CryptoJS.AES.encrypt(
            JSON.stringify(res.results),
            Cookies.get("token")
          );
          setQuestions(res.results);
          localStorage.setItem("questions", encrypted);
          localStorage.setItem("index", 0);
        })
        .catch((ex) => {
          console.error(ex);
        });
    } else {
      var data = localStorage.getItem("questions");
      var decrypted = CryptoJS.AES.decrypt(data, Cookies.get("token"));
      setQuestions(JSON.parse(decrypted.toString(CryptoJS.enc.Utf8)));
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
  if(!localStorage.getItem("questions")) return "";
  var data = localStorage.getItem("questions");
  var decrypted = CryptoJS.AES.decrypt(data, Cookies.get("token"));
  const question = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
  return question[index].correct_answer;
};

const ResultAccess = () => {
  let bool = false;
  if (localStorage.getItem("result") === "true") {
    bool = true;
  }
  return bool;
};
const RouteCheck = () => {
  let bool = false;
  if (localStorage.getItem("routeCheck") === "true") {
    bool = true;
  }
  return bool;
};

export default {
  getToken,
  GetByCategory,
  GetCategories,
  deleteLocalStorage,
  GetIndexCorrectAnswer,
  ResultAccess,
  RouteCheck,
};
