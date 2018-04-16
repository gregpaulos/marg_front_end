import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main/Main";

class App extends Component {
  state = {
    establishments: [],
    userLocation: {},
    showMap: false
  };


  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position)
      this.setState({ userLocation: {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      } 
    })
  })
}
    
  dev = window.location.href.includes("localhost");
  local = "http://localhost:3000/v1/";
  heroku = "https://marg-finder.herokuapp.com/v1/";

  findRandomMargs = () => {
    let url = this.dev ? this.local : this.heroku;
    url = url + "establishments/random/" + this.state.userLocation.lng + "/" + this.state.userLocation.lat
    
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ 
          establishments: data,
          showMap: true
        });
      });
  };

  render() {
    return (
      <div>
        <Header />
        <Main
          establishments={this.state.establishments}
          findRandomButton={this.findRandomMargs}
          userLocation={this.state.userLocation}
          showMap={this.state.showMap}
        />
      </div>
    );
  }
}

export default App;
