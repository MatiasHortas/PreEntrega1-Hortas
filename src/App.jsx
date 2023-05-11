import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./componentes/Navbar/Index";
import ItemListContainer from "./componentes/itemListContainer";
import ItemDetails from "./componentes/itemListContainer/itemDetail";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <BrowserRouter>
        <NavBar />
            <Routes>
              <Route path="/alien" />
              <Route path="/humano" />
              <Route path="/item" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetails />} />
            </Routes>
          
        </BrowserRouter>
        <button className="app__button app__button--disabled" disabled></button>
      </header>
      <body className="app__body">
        <ItemListContainer greeting="Tienda de cartas" />
      </body>

      <footer></footer>
    </div>
  );
}

export default App;
