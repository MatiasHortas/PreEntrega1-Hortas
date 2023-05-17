import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import Contador from "../ItemCount";

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        ).then((response) => response.json());
        console.log(response);
        setItem(response);
      } catch (error) {
        console.error(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!item) {
    return <p>Cargando...</p>;
  }

  const circuloClass = item.status === "Dead" ? "circulo-red" : "circulo-green";

  return (
    <div className="container__detalle">
      <div className="div1">
        <h1 className="titulo__inicio--detalle">Detalle de compra</h1>
        <div className="container__detalle--item">
          <h2 className="titulo__item--detalle">{item.name}</h2>
          <img src={item.image} className="img__detalle" />
        </div>
      </div>
      <div className="container__grid--compra">
        <h2 className="item__precio--detalle">$ 350</h2>
        <p className="letraCambio">Carta de {item.name}</p>
        <p className="letraCambio">Descripcion:</p>
        <p className="letraCambio">Genero: {item.gender}</p>
        <p className="letraCambio">Ubicacion: {item.location.name}</p>
        {/* <p>
          {item.status} - {item.species}
        </p> */}
        <button className={circuloClass}></button> {item.status} -{" "}
        {item.species}
        <div className="container__item--precio__detalle"></div>
        <Contador
          initial={1}
          stock={10}
          onAdd={(quantity) => console.log("cantidad agregada", quantity)}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
