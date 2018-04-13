import React, { Component } from 'react';
import logo from './logo.svg';
import cocktail from './cocktail-transparent-png-clip-art-5a3c1b229d5e33.8458776515138885466446.jpg'
import './App.css';
import Header from './components/Header';
import Main from './components/Main/Main';



class App extends Component {
  state = {
    establishments: []
  }
  
  dev = window.location.href.includes('localhost')
  local = 'http://localhost:3000/v1/'
  heroku = 'https://marg-finder.herokuapp.com/v1/'

  componentDidMount = () => {
    const url = this.dev ? this.local : this.heroku
    fetch(url+'establishments/random/')
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({establishments: data})
      })


  }


  render() {
    return (
      <div>
        <Header />
        <Main establishments={this.state.establishments}/>
      </div>
    );
  }
}

export default App;
