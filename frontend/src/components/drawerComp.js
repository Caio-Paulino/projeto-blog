import React, { useState } from 'react';
import { Box, Drawer, IconButton, List, ListItemButton, ListItemText, Typography, TextField } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ListAltSharpIcon from '@mui/icons-material/ListAltSharp';

import { Link } from 'react-router-dom';

import toggle_light from '../assets/night.png';
import toggle_dark from '../assets/day.png';

function DrawerComp({ theme, setTheme }) {

    const colorIcon = theme === 'light' ? '#000' : '#fff'

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

    const [openDrawer, setOpenDrawer ] = useState(false)

    return (
        <React.Fragment>
        <Drawer open={openDrawer}
        onClose={() => setOpenDrawer(false)}>
            <List sx={{height: "100vh", padding:"16px", display: "flex", flexDirection: "column", background: theme === 'light' ? 'var(--color-white)' : 'var(--color-black)'}}>
            <Box sx={{ display: 'flex', alignItems: 'center', paddingBottom: '16px' }}>
                <SearchIcon sx={{ color: colorIcon}}/>
                <TextField
                    label="Pesquisar"
                    variant="outlined" 
                    size="small"
                    sx={{ background: 'white'}}/>
            </Box>
                <Link to="/home"><ListItemButton>
                    <HomeIcon sx={{ color: colorIcon}}/>
                    <ListItemText>
                        <Typography 
                        variant='h6'
                        color={theme === 'light' ? '#000' : '#fff'}
                        paddingLeft={'30px'}>
                        Home
                        </Typography>
                    </ListItemText>
                </ListItemButton></Link>
                <Link to="/"><ListItemButton>
                    <LoginIcon sx={{ color: colorIcon}}/>
                    <ListItemText>
                        <Typography 
                        variant='h6'
                        color={theme === 'light' ? '#000' : '#fff'}
                        paddingLeft={'30px'}>
                        Entrar
                        </Typography>
                    </ListItemText>
                </ListItemButton></Link>
                <Link to="/post"><ListItemButton>
                <PostAddIcon sx={{ color: colorIcon}}/>
                    <ListItemText>                        
                        <Typography 
                        variant='h6'
                        color={theme === 'light' ? '#000' : '#fff'}
                        paddingLeft={'30px'}>
                        Postar
                        </Typography>
                    </ListItemText>
                </ListItemButton></Link>
                <Link to="/search"><ListItemButton>
                <ListAltSharpIcon sx={{ color: colorIcon}}/>
                    <ListItemText>                        
                        <Typography 
                        variant='h6'
                        color={theme === 'light' ? '#000' : '#fff'}
                        paddingLeft={'30px'}>
                        Pesquisar
                        </Typography>
                    </ListItemText>
                </ListItemButton></Link>
                <ListItemButton sx={{padding: "0px"}}>
                <img onClick={() => toggleTheme()} src={theme === 'light' ? toggle_light : toggle_dark} className='toggle-icon-drawer' alt='icone'></img>
                </ListItemButton>
            </List>
        </Drawer>
        <IconButton 
        onClick={() => setOpenDrawer(!openDrawer)}
        sx={{color: "white", width: "30px"}}>
            <MenuIcon/>
        </IconButton>
        </React.Fragment>
    );
}

export default DrawerComp;