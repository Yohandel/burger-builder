import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) => (
    <header className='Toolbar'>
        <DrawerToggle clicked = {props.menuToggleClicked}/>
        <Logo 
        height="80%"/>
        <nav className='DesktopOnly'>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar
