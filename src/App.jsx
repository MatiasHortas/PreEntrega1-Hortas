import NavBar from "./componentes/Navbar/Index";
import ItemListContainer from "./componentes/ItemListContainer/Index";

function App() {
  return (
    <div className="">
      <header className="App-header">
        <NavBar />
        <ItemListContainer greeting="Impresiones 3D"/>
      </header>
    </div>
  );
}

export default App;