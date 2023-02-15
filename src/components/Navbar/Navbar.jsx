import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import Sections from "./Sections/Sections";
const Navbar = ({ brand }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          {brand}

          <button
            className="navbar-toggler ms-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Sections /> {/* Secciones */}
          </ul>
          <CartWidget cantidadCarrito={10} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
