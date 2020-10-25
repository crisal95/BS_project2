import React, { useState, useEffect } from "react";
import ApiHooks from "../../hooks/apiHooks";
import CategorieCard from "../../components/categoryCard/categoryCard";
import "./home.css";
import Hero from "../../components/hero/hero";

const Home = () => {
  const categories = ApiHooks.GetCategories();
  ApiHooks.deleteLocalStorage();
  localStorage.setItem("boolIndex", "false");
  localStorage.setItem("result", "false");
  localStorage.setItem("routeCheck", "false");
  const removeCategories = [13, 21, 24, 25, 30, 16, 23];

  useEffect(() => {
    if (categories) {
      console.log(categories);
    }
  });


  return (
    <div>
      <Hero />
      <div className="home">
        {categories.map((item) => {
          if (removeCategories.indexOf(parseInt(item.id)) === -1) {
            return <div key={item.id} className="categorieItem">
              <CategorieCard categoryData={item} />
            </div>;
          }
        })}
      </div>
    </div>
  );
};

export default Home;
