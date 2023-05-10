import {BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./componentes/Navbar/Index";
import ItemListContainer from "./componentes/itemListContainer";



function App() {
  return (
    <div className="app">
      <header className="app__header">
        <BrowserRouter>
        <NavBar  /> 
          <Routes>
            <Route/>
          </Routes>
        </BrowserRouter>
        <button className="app__button app__button--disabled" disabled>click me</button>
      </header>
      <body className="app__body" >
        <ItemListContainer greeting='Tienda de cartas'/>
      </body>

      <footer>
      </footer>
    </div>
  );
}

export default App;