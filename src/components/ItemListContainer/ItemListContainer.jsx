import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { consultarBD } from "../../utils/functions";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { nomCategoria } = useParams();

  console.log(nomCategoria);

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    if (nomCategoria) {
      consultarBD("../json/categories.json").then((categories) => {
        console.log(categories);
        const cats = categories.filter(
          (cat) => cat.nomCategoria.toLowerCase() === nomCategoria
        );
        console.log(cats);

        const idCategoria = cats[0].idCategoria;

        consultarBD("../json/products.json").then((products) => {
          const prods = products.filter(
            (prod) => prod.idCategoria === parseInt(idCategoria)
          );
          const items = ItemList({ prods });
          setProductos(items);
        });
      });
    } else {
      consultarBD("./json/products.json").then((prods) => {
        const items = ItemList({ prods });
        setProductos(items);
      });
    }
  }, [nomCategoria]);

  return (
    <div className="container d-flex flex-row justify-content-center align-items-center flex-wrap gap-5 mt-3">
      {productos}
    </div>
  );
};

export default ItemListContainer;

// Si son varias consultas se recomienda hacer esto:
// const consultaDatos = async () => {
//   const prods = await consultarBD("./json/products.json");
//   console.log(prods);
// };
// consultaDatos();
