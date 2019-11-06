import React, { Component } from 'react';
import Auxiliar from '../../hoc/Auxiliar';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'


class Layout extends Component {
    state = { 
        showSideDrawer: false,
     }

    sideDrawerCloseHandler = () =>{
        this.setState({showSideDrawer:false})
    }


    sideDrawerOpenHandler = () =>{
        this.setState({showSideDrawer:true})
    }

     

    render() {
        return (
            <Auxiliar>
            <Toolbar clickedMenu={this.sideDrawerOpenHandler}/>
            <SideDrawer open={this.state.showSideDrawer} close={this.sideDrawerCloseHandler}/>
            <main className='Content'>
                {this.props.children}
            </main>
            </Auxiliar>
        );
    }
}

export default Layout;