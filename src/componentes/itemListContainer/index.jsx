import { useState, useEffect } from "react";
import "./style.css";
import Item from "./item";

const ItemListContainer = ({greeting}) => {
    const [itemList, setRickMorty] = useState([]);


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character/');
                if (!response.ok) {
                    throw new Error('Ningun producto encontrado');
                }
                const data = await response.json();
                setRickMorty(data.results);
            } catch (error) {
                console.error('Ocurrio un error buscando la tienda:', error);
            }
        } fetchData();
    }, []);

    
    return (
        

        <div >
            <div className="titulo__inicio">
            <h1 >{greeting}</h1>
            </div>
            <div className="container__img">
            {itemList.map((item) =>{
                return <Item key={item.id} name={item.name} image={item.image} id={item.id} species={item.species}/>
                    
            })}
            </div>
            
        </div>
    )

}
export default ItemListContainer;