const Categories = () => {
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
        <li>
          <a className="dropdown-item" href="index.html">
            Pizzas
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="index.html">
            Empanadas
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="index.html">
            Gaseosas
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="index.html">
            Postres
          </a>
        </li>
      </ul>
    </li>
  );
};

export default Categories;
