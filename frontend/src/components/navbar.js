import React from 'react';
import { Link } from 'react-router-dom'

import '../styles/Navbar.css';

import logo_light from '../assets/logotipo-do-blogger.png';
import logo_dark from '../assets/logotipo-do-blogger.png';
import search_icon_light from '../assets/search-w.png';
import search_icon_dark from '../assets/search-b.png';
import toggle_light from '../assets/night.png';
import toggle_dark from '../assets/day.png';

function Navbar({theme, setTheme}) {

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark": "light"));
      };

    return(
        <header className='header'>
            <img src={theme === 'light' ? logo_light : logo_dark} alt='logo' className='logo'></img>
            <nav className='navbar'>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/post">Postar</Link></li>
                    <li><a href="">About</a></li>                    
                </ul>
            </nav>
            <div className='search-box'>
                <input type='text' placeholder='Procurar'/>
                <img src={theme === 'light' ? search_icon_light : search_icon_dark} alt='logo'></img>
            </div>

            <img onClick={() => toggleTheme()} src={theme === 'light' ? toggle_light : toggle_dark} className='toggle-icon' alt='icone'></img>
        </header>
    );
}

export default Navbar;