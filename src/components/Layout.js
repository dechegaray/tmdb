import React, { Component} from 'react';
import Aux from '../hoc/Aux';
import Menu from './Menu';
import SearchBar from './SearchBar';

class Layout extends Component{

    render(){
        return (
            <Aux>
                <Menu />
                <SearchBar changed="2" value="2" />
                <main>
                    { this.props.children }
                </main>
            </Aux>
        );
    }
}

export default Layout;