import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import './categoryCard.css';

const CategoryCard = ({ categoryData }) => {
 const [redirect, setRedirect] = useState(false);

const click = () => {
  setRedirect(true);
};
const redirectTo = (id) => {
  return (
    <Redirect
      to={{
        pathname: "/trivia",
        search: "?id=" + id,
      }}
    />
  );
};

if (redirect) {
  return redirectTo(categoryData.id);
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
