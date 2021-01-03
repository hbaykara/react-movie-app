import React, { Component} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import MoviesPage from './components/pages/MoviesPage';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Container text>
          <Route path="/movies" component={MoviesPage}></Route>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default App;
