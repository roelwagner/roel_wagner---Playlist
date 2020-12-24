import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <nav className="main-nav">
            <ul className="nav-links">
                <Link to="/"><li>Playlist</li></Link>
                <Link to="/about"><li>About Me</li></Link>
            </ul>
        </nav>
    );
}

export default Nav;