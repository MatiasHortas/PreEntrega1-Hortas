import { Link} from "react-router-dom";
import CartWidget from "../cartWidget";
import "./navbar.css";


import("https://fonts.googleapis.com/css2?family=Castoro+Titling&display=swap");

const NavBar = () => {
  return (
    
      <div className="navbar">
        <CartWidget />

        <div className="navbar__container-gral ">
          <Link to='/' className="navbar__titulo" >The Citadel</Link>
          <div className="navbar__container--secciones">
            <Link to="/humano" className="navbar__seccion">Humano</Link>
            <Link to="/alien" className="navbar__seccion">Alien</Link>
          </div>
        </div>
      </div>

    
  );
};
export default NavBar;
