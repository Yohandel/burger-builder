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


    sideDrawerToggleHandler = () =>{
        this.setState( (prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer};
        });
    }

     

    render() {
        return (
            <Auxiliar>
            <Toolbar menuToggleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer open={this.state.showSideDrawer} close={this.sideDrawerCloseHandler}/>
            <main className='Content'>
                {this.props.children}
            </main>
            </Auxiliar>
        );
    }
}

export default Layout;