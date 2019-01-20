import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => (
    <header className="nav">
        <div>
            <img src="https://www.rapidratings.com/assets/RR_logo_horizontal_color_registered.png" alt="Logo" />
        </div>
        <ul>
            <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
            <li><NavLink to="/chart">Chart</NavLink></li>
        </ul>    
    </header>
);

export default Header;