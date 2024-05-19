import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

import toggle_light from '../assets/night.png';
import toggle_dark from '../assets/day.png';

function DrawerComp({ theme, setTheme }) {

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

    const [openDrawer, setOpenDrawer ] = useState(false)

    return (
        <React.Fragment>
        <Drawer open={openDrawer}
        onClose={() => setOpenDrawer(false)}>
            <List sx={{height: "100vh", padding:"16px", display: "flex", flexDirection: "column", alignItems: "center", background: theme === 'light' ? '#fff' : '#000'}}>
                <Link to="/"><ListItemButton>
                    <Typography >Home</Typography>
                </ListItemButton></Link>
                <Link to="/login"><ListItemButton>
                    <Typography >Login</Typography>
                </ListItemButton></Link>
                <Link to="/post"><ListItemButton>
                    <Typography>Postar</Typography>
                </ListItemButton></Link>
                <ListItemButton>
                <img onClick={() => toggleTheme()} src={theme === 'light' ? toggle_light : toggle_dark} className='toggle-icon' alt='icone'></img>
                </ListItemButton>
            </List>
        </Drawer>
        <IconButton 
        onClick={() => setOpenDrawer(!openDrawer)}
        sx={{color: "white", marginLeft: "auto"}}>
            <MenuIcon />
        </IconButton>
        </React.Fragment>
    );
}

export default DrawerComp;