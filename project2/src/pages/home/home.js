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

  return (
    <div>
      <Hero />
      <div className="home">
        {categories.map((item) => (
          <div key={item.id} className="categorieItem">
            <CategorieCard categoryData={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
