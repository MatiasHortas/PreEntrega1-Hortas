import React from "react";



const Item  =(item)=>{

    return (


        <div className="container__item">
            <div className="container__imagen">
            <div className="container__item--numero">
            <h1 className="item__titulo">{item.name}</h1>
            <p className="item__numero">{item.id}</p>
            </div>
            <img  className="item__img" src={item.image} alt="imagen" srcset="" />
            </div>
            <div className="container__item--boton">
            <button className="item__boton">Comprar</button>
            </div>
            
            
            
        </div>
    )
}
export default Item;