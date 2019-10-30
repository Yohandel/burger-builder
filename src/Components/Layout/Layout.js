import React from 'react';
import Auxiliar from '../../hoc/Auxiliar';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) =>(
    <Auxiliar>
    <Toolbar/>
    <main className='Content'>
        {props.children}
    </main>
    </Auxiliar>
);

export default layout