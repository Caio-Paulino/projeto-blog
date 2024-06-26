import React from 'react';
import { Link } from 'react-router-dom';


import '../styles/Navbar.css';

import logo from '../assets/logo.png';
import toggle_light from '../assets/night.png';
import toggle_dark from '../assets/day.png';

import { TextField, Box, AppBar, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DrawerComp from './drawerComp';


function Navbar({ theme, setTheme }) {

    // Função para alternar tema
    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

    // guarda tamanho da tela do usuário
    const bTheme = useTheme();
    const isMatch = useMediaQuery(bTheme.breakpoints.down('sm'));

    

    return (
        <AppBar position='static' sx={{ background: theme === 'light' ? "var(--color-light-blue)" : "var(--color-blue)" }} >
            <Toolbar style={{ display: "flex", justifyContent: "space-between", paddingBottom: "16px", paddingTop: "16px" }}>
                {
                    isMatch ? (
                        <Box sx={{ width: "100vw", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                            <Link to="/"><img src={logo} alt='logo' className='logo'></img></Link>
                            <DrawerComp theme={theme} setTheme={setTheme}
                            />
                        </Box>
                    ) : (
                        <>
                            <Link to="/"><img src={logo} alt='logo' className='logo'></img></Link>
                            <nav className='navbar'>
                                <ul>
                                    <li><Link to="/home">Home</Link></li>
                                    <li><Link to="/">Entrar</Link></li>
                                    <li><Link to="/post">Postar</Link></li>
                                    <li><Link to="/search">Pesquisar</Link></li>                                   
                                </ul>
                            </nav>
                            {/* <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <SearchIcon />
                                <TextField
                                    label="Pesquisar"
                                    variant="standard"                    />
                            </Box> */}

                            <img onClick={() => toggleTheme()} src={theme === 'light' ? toggle_light : toggle_dark} className='toggle-icon' alt='icone'></img>
                        </>
                    )
                }

            </Toolbar>
        </AppBar>
    );
}

export default Navbar;