import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

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

  // if (item.status === "Dead") {
  //   return (
  //     <span className="spanColor" style={{ backgroundColor: "green" }}></span>
  //   );
  // }

  return (
    <div>
      <div className="container__img--detalle">
        <h1>Detalle</h1>
        <p className="item__numero">{item.id}</p>
        <h2>{item.name}</h2>
        <img src={item.image} />
      </div>
      <p>{item.gender}</p>
      <p>{item.location.name}</p>
      <p>
        {item.status} - {item.species}
      </p>
      <div className="container__item--precio__detalle">
        <h2 className="item__precio">$ 350</h2>
      </div>
    </div>
  );
};

export default ItemDetail;
