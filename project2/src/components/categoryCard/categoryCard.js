import React, { useState } from "react";
import './categoryCard.css';
import ButtonsFunctions from "../../hooks/buttonsFunctions";

const CategoryCard = ({ categoryData }) => {
 const [redirect, setRedirect] = useState(false);

const click = () => {
  setRedirect(true);
  localStorage.setItem("id",categoryData.id);
};


if (redirect) {
  return ButtonsFunctions.redirectTrivia(categoryData.id);
}

  return (
    <div className="categoryCard" onClick={() => {
      click();
    }}>
      <h2>{categoryData.name}</h2>
    </div>
  );
};

export default CategoryCard;
