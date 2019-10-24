import React from 'react';
import Auxiliar from '../../hoc/Auxiliar';
import classes from './Layout.css';

const layout = (props) =>(
    <Auxiliar>
    <div>SideBar, ToolBar, BackDrop</div>
    <main className='Content'>
        {props.children}
    </main>
    </Auxiliar>
);

export default layout