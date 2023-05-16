import { useState, useEffect } from "react";
import "./style.css";
import Item from "./item";
import { Link, useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [itemList, setRickMorty] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    console.log(categoryId);
    async function fetchData() {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=1`
        );
        if (!response.ok) {
          throw new Error("Ningun producto encontrado");
        }
        const data = await response.json();
        setRickMorty(data.results);

        const productoFiltrado = itemList.filter(
          (item) => item.species === categoryId
        );

        // setRickMorty(productoFiltrado);

        console.log(response);
        console.log(productoFiltrado);
      } catch (error) {
        console.error("Ocurrio un error buscando la tienda:", error);
      }
    }

    fetchData();
  }, [categoryId]);

  return (
    <div>
      <div className="titulo__inicio">
        <h1>{greeting}</h1>
      </div>
      <div className="container__img">
        {itemList.map((item) => {
          return (
            <Link to={`/item/${item.id}`} state={{ item }}>
              {" "}
              <Item
                key={item.id}
                name={item.name}
                image={item.image}
                id={item.id}
                species={item.species}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default ItemListContainer;
