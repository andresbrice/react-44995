import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";
const ItemDetail = ({ product }) => {
  return (
    <div className="row g-0">
      <div className="col-md-4">
        <img src={`../img/${product.img}`} className="" alt={product.nombre} />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{product.nombre}</h5>
          <p className="card-text">Descripción: {product.descripcion}</p>
          <p className="card-text">Precio: ${product.precio}</p>
          <p className="card-text">Stock: {product.stock}</p>
          <ItemCount ValInicial={1} stock={product.stock} />
          <button className="btn btn-primary btn-lg btn-block mt-3 ">
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
