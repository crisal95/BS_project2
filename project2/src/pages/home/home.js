import React from "react";
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
  localStorage.setItem("timer","30");
  const removeCategories = [13, 21, 24, 25, 30, 16, 23];


  return (
    <div>
      <Hero />
      <div id="home" className="home">
        {categories.map((item) => {
          if (removeCategories.indexOf(parseInt(item.id)) === -1) {
            return <div key={item.id} className="categorieItem">
              <CategorieCard categoryData={item} />
            </div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Home;
