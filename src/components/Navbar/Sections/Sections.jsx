import Categories from "../Categories/Categories";

const Sections = () => {
  return (
    <>
      {/* Categorias de productos */}
      <Categories />

      <li className="nav-item">
        <a className="nav-link" href="index.html">
          Contacto
        </a>
      </li>
    </>
  );
};

export default Sections;
