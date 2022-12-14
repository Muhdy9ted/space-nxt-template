import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import {Menu, Brightness4, Brightness7} from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';


//theming light and dark mode 
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from '../../App';

import classes from './navbar.module.scss';
import { icons } from '../../constants'

function Navbar() {

    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    const [menus, setMenus] = useState(['About', 'Gallery', 'FAQs', 'Contact us']);
    const [sideMenu, setSideMenu] = useState({left: false});
    const mdUpwards = useMediaQuery(theme.breakpoints.up('md'));

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setSideMenu({[anchor]: open})
    };

    const sideMenuList = (anchor) => (
        <Box sx={{ width: 'auto' }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)} className={classes.header__toolbar___menus}>
            <List className={classes.sideMenu__list}>
                {menus.map((text, index) => (
                    <ListItem key={text} disablePadding className={classes.sideMenu__item}>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <>
            <Box className={classes.header}>
                <AppBar position="static" className={classes.header__navbar}>
                    { mdUpwards ?
                        <Toolbar className={classes.header__toolbar} >
                            <Box className={classes.header__toolbar___logo}>
                                <img src={icons.spaceNXTLogo} alt="spaceNXT logo" />
                            </Box>
                            <Box className={classes.header__toolbar___menus}>
                                <ul>
                                    {
                                        menus.map((link, index) => (
                                            <li key={index}>
                                                <Typography variant="h6" component="p">
                                                    {link}
                                                </Typography> 
                                            </li>
                                        ))
                                    }
                                </ul>
                            </Box>
                            <Box className={classes.header__toolbar___buttons}>
                                <Button variant="contained" color="primary" size='medium'>Book Now</Button>
                                {/* <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                                    <Menu />
                                </IconButton> */}
                                {/* <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                                    {theme.palette.mode === 'dark' ? <Brightness7 color='primary' /> : <Brightness4 color='secondary' />}
                                </IconButton> */}
                            </Box>
                        </Toolbar>
                        :
                        <Toolbar className={classes.header__toolbar} >
                            <Box className={classes.header__toolbar___logo}>
                                <img src={icons.spaceNXTLogo} alt="spaceNXT logo" />
                            </Box>
                            <IconButton size="large" edge="start" color="secondary" aria-label="menu" onClick={toggleDrawer('left', true)}>
                                <Menu />
                            </IconButton>
                            <Drawer anchor={'left'} open={sideMenu['left']} onClose={toggleDrawer('left', false)}>
                                {sideMenuList('left')}
                            </Drawer>
                        </Toolbar>
                    }
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar