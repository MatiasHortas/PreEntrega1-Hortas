import React from "react";

<<<<<<< HEAD
export const Item = (item) => {
  return (
    <div className="container__item">
      <div className="container__imagen">
        <div className="container__item--numero">
          <h1 className="item__titulo">{item.name}</h1>
=======
const Item = (item) => {
  return (
    <div className="container__item">
      
      <div className="container__imagen">
        <div className="container__item--numero">
          <h1 className="item__titulo">{item.name}</h1>
          <p className="item__numero">{item.id}</p>
>>>>>>> c2db53913e9dd82890bd52f8a44207d92c0bfdba
        </div>
        <img className="item__img" src={item.image} alt="imagen" srcset="" />
      </div>

<<<<<<< HEAD
      <div className="container__item--precio">
        <h2 className="item__precio">$ 350</h2>
      </div>
    </div>
=======
      <div className="container__item--boton">
        <button className="item__boton">Comprar</button>
      </div>
    </div>
    
>>>>>>> c2db53913e9dd82890bd52f8a44207d92c0bfdba
  );
};
export default Item;
