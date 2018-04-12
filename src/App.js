import React, { Component } from 'react';
import logo from './logo.svg';
import cocktail from './cocktail-transparent-png-clip-art-5a3c1b229d5e33.8458776515138885466446.jpg'
import './App.css';
import Header from './components/Header';
import Main from './components/Main/Main';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
