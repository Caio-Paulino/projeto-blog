import React from 'react';
import { Link } from 'react-router-dom'

import '../styles/Navbar.css';

import logo_light from '../assets/logotipo-do-blogger.png';
import toggle_light from '../assets/night.png';
import toggle_dark from '../assets/day.png';

import { TextField, Box, AppBar, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DrawerComp from './drawerComp';


function Navbar({ theme, setTheme }) {

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

    const bTheme = useTheme();
    const isMatch = useMediaQuery(bTheme.breakpoints.down('sm'))

    return (
        <AppBar position='static' sx={{ background: theme === 'light' ? "#97C6D3" : "#77B2E8" }} >
            <Toolbar style={{ display: "flex", justifyContent: "space-between", paddingBottom: "16px", paddingTop: "16px" }}>
                {
                    isMatch ? (
                        <Box sx={{ width: "100vw", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                            <Link to="/"><img src={logo_light} alt='logo' className='logo'></img></Link>
                            <DrawerComp theme={theme} setTheme={setTheme}
                            />
                        </Box>
                    ) : (
                        <>
                            <Link to="/"><img src={logo_light} alt='logo' className='logo'></img></Link>
                            <nav className='navbar'>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/post">Postar</Link></li>                                   
                                </ul>
                            </nav>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <SearchIcon />
                                <TextField
                                    label="Pesquisar"
                                    variant="standard" 
                                    />
                            </Box>

                            <img onClick={() => toggleTheme()} src={theme === 'light' ? toggle_light : toggle_dark} className='toggle-icon' alt='icone'></img>
                        </>
                    )
                }

            </Toolbar>
        </AppBar>
    );
}

export default Navbar;