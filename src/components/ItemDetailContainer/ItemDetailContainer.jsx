import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { consultarBD } from "../../utils/functions";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    consultarBD("../json/products.json").then((prods) => {
      const prod = prods.find((item) => item.id === parseInt(id));
      setProducto(prod);
    });
  }, [id]);

  return (
    <div className="card mb-3 container itemDetail">
      <ItemDetail product={producto} />
    </div>
  );
};

export default ItemDetailContainer;
