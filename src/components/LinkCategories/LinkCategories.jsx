import React from "react";
import { Link } from "react-router-dom";

const LinkCategories = ({ categories }) => {
  console.log(categories);
  if (!categories) {
    return null;
  }
  return (
    <li>
      {categories.map((category) => (
        <Link
          key={categories.idCategoria}
          className="dropdown-item"
          to={`/category/${category.nomCategoria.toLowerCase()}`}
        >
          {category.nomCategoria}
        </Link>
      ))}
    </li>
  );
};

export default LinkCategories;
