import { useState } from "react";
export const ItemCount = ({ ValInicial, stock }) => {
  const [contador, setContador] = useState(ValInicial); //Defino un estado con valor inicial 1

  //contador-- => contador = contador - 1 ESTO NO SE PUEDE HACER

  const sumar = () => contador < stock && setContador(contador + 1);
  const restar = () => contador > ValInicial && setContador(contador - 1);
  return (
    <div>
      <button className="btn btn-dark" onClick={() => restar()}>
        -
      </button>
      <span className="mx-3">{contador}</span>
      <button className="btn btn-dark" onClick={() => sumar()}>
        +
      </button>
      <div>
        <button className="btn btn-dark mt-2">Agregar al Carrito</button>
      </div>
    </div>
  );
};
