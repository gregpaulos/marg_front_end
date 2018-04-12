import React, { Component } from 'react';
import logo from './logo.svg';
import cocktail from './cocktail-transparent-png-clip-art-5a3c1b229d5e33.8458776515138885466446.jpg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={cocktail} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to MARG FINDER</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
