import { useState, useEffect } from "react";
import "./style.css";
import Item from "./item";
<<<<<<< HEAD
import { Link, useParams } from "react-router-dom";
=======
import { Link} from "react-router-dom";

>>>>>>> c2db53913e9dd82890bd52f8a44207d92c0bfdba

const ItemListContainer = ({}) => {
  const [itemList, setItemList] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=1`
        );
        if (!response.ok) {
          throw new Error("Ningún producto encontrado");
        }
        const data = await response.json();
        setItemList(data.results);
      } catch (error) {
        console.error("Ocurrió un error buscando la tienda:", error);
      }
    }

<<<<<<< HEAD
    fetchData();
  }, []);
=======
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character/' );
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
>>>>>>> c2db53913e9dd82890bd52f8a44207d92c0bfdba

  let productoFiltrado;
  if (categoryId !== "Human" && categoryId !== "Alien") {
    productoFiltrado = itemList; // Mostrar todos los elementos sin filtrar
  } else {
    productoFiltrado = itemList.filter((item) => item.species === categoryId);
  }

<<<<<<< HEAD
  return (
    <div>
      <div className="container__titulo--cartas">
        <h1 className="titulo__principal--cartas">Cartas de Rick And Morty</h1>
      </div>
      <div className="container__img">
        {productoFiltrado.map((item) => (
          <Link to={`/item/${item.id}`} state={{ item }} key={item.id}>
            <Item
              name={item.name}
              image={item.image}
              id={item.id}
              species={item.species}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
=======
        <div >
            <div className="titulo__inicio">
            <h1 >{greeting}</h1>
            </div>
            <div className="container__img">
            {itemList.map((item) =>{

            return   <Link to={'/item'}> <Item key={item.id} name={item.name} image={item.image} id={item.id} species={item.species}/> 
            </Link>
                    
            })}
            </div>
            
        </div>
    )
>>>>>>> c2db53913e9dd82890bd52f8a44207d92c0bfdba

export default ItemListContainer;
