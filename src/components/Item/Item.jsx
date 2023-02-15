import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div
      className="card mb-3 cardProducto border-light"
      style={{ width: "18rem" }}
    >
      <img
        src={`/img/${item.img}`}
        className="card-img-top"
        alt={`Imagen de ${item.nombre}`}
      />
      <div className="card-body cardBody">
        <h5 className="card-title">{item.nombre}</h5>
        <p className="card-text">{item.descripcion}</p>
        <p className="card-text">${item.precio}</p>
        <Link
          href="index.html"
          className="btn btn-primary"
          to={`/item/${item.id}`}
        >
          Ver Producto
        </Link>
      </div>
    </div>
  );
};

export default Item;
