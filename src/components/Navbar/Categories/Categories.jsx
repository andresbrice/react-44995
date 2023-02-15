import { useEffect, useState } from "react";
import { consultarBD } from "../../../utils/functions";
import LinkCategories from "../../LinkCategories/LinkCategories";

const Categories = () => {
  useEffect(() => {
    consultarBD("../json/categories.json").then((categories) => {
      console.log(categories);
      setCategories(categories);
    });
  }, []);

  const [categories, setCategories] = useState();
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="index.html"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Categorías
      </a>
      <ul className="dropdown-menu">
        <LinkCategories categories={categories} />
      </ul>
    </li>
  );
};

export default Categories;
