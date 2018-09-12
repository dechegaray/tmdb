import React, { Component} from 'react';
import Aux from '../hoc/Aux';
import Menu from './Menu';
import SearchBar from './SearchBar';
import Footer from './Footer';

class Layout extends Component{

    render(){
        return (
            <Aux>
                <Menu />
                <SearchBar changed="2" value="2" />
                <main>
                    { this.props.children }
                </main>
                <Footer />
            </Aux>
        );
    }
}

export default Layout;