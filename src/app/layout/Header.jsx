import { NavLink } from "react-router-dom";
import "../App.css"

export const Header = () => {
    return (

        <header className="nav">

            <NavLink to="/" end className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/info" className="nav-link">Info</NavLink>
            <NavLink to="/list" className="nav-link">Guests</NavLink>
            
        </header>

    );
}