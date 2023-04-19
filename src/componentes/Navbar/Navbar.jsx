import CartWidget from "../CartWidget";
import  "./navbar.css";

const NavBar =()=>{
    return (
        
        <div className="navbar">
            <CartWidget />
            <h1 className="navbar__titulo" >3DREAMS</h1>
            <div className="navbar-container__secciones">
            <a className="navbar__seccion" href="#" >Peliculas</a>
            <a className="navbar__seccion" href="#" >Anime</a>
            <a className="navbar__seccion" href="#" >Juegos</a>
            </div>
            
        </div>
        
    )
}
export default NavBar;