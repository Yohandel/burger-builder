import React from 'react';
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => (
    <ul className='NavigationItems'>
        <NavigationItem link="/" active >Burger Builder</NavigationItem>
        <NavigationItem link="/" >Check out</NavigationItem>
    </ul>
)

export default navigationItems;
