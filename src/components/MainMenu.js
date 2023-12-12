import { Link } from "react-router-dom";

export const MainMenu = () =>(
    //bootstrap class
    <ul className="nav justify-content-center">
        
        <li className="nav-item">
            <Link className="nav-link" to="/"><h3>Home</h3></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/favorites"><h3>Favorites</h3></Link>
        </li>
        
    </ul>
)