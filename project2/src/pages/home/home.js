import React, { useState, useEffect } from "react";
import ApiHooks from "../../hooks/apiHooks";
import CategorieCard from "../../components/categoryCard/categoryCard";
import './home.css';


 const Home = () => {
    const categories = ApiHooks.GetCategories();

  return (
    <div className="home">
            {categories.map((item) => (
          <div key={item.id} className="categorieItem">
            <CategorieCard categoryData={item} />
          </div>
        ))}
    </div>
  );
};

export default Home;
