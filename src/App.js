import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import MovieList from './containers/MovieList';
import MovieView from './containers/MovieView';
import './App.css';

class App extends Component {

  state = {
    movie: null
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/genres" component={MovieView} />
            <Route path="/" exact component={MovieView} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;

