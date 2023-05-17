import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import NavBar from "./componentes/Navbar/";
import ItemListContainer from "./componentes/itemListContainer";
import ItemDetalle from "./componentes/ItemDetailContainer";
import caterogyMock from "./componentes/itemListContainer/speciesNav.json";
// import NextPage from "./componentes/nextPage";

const App = () => {
=======
import NavBar from "./componentes/Navbar/Index";
import ItemListContainer from "./componentes/itemListContainer";
import ItemDetails from "./componentes/itemListContainer/itemDetail";

function App() {
>>>>>>> c2db53913e9dd82890bd52f8a44207d92c0bfdba
  return (
    <div className="app">
      <header className="app__header">
        <BrowserRouter>
<<<<<<< HEAD
          <NavBar category={caterogyMock.category} />
          <div className="container__principal--titulo"></div>

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/items" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetalle />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>

          {/* <NextPage /> */}
        </BrowserRouter>
      </header>
      <body className="app__body"></body>

=======
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

>>>>>>> c2db53913e9dd82890bd52f8a44207d92c0bfdba
      <footer></footer>
    </div>
  );
};

export default App;
