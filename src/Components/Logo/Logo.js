import React from 'react';
import burgerLogo from '../../assets/Images/burger-logo.png'
import classes from './Logo.css'

const logo = (props) => (
    <div className='Logo' style={{height: props.height}}>
        <img src={burgerLogo}/>
    </div>
);

export default logo;