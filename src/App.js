import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Navigation';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Nav />
        <div className="jumbotron">
          <h2>3WireBuild</h2>
          <p className="lead">Designer -- Developer -- Builder</p>
        </div>
        <div className="container mt-4">
          <h2 className="page-title">About</h2>
          <section>
            <h3 className="section-title"> The Person </h3>
          </section>
          <section>
            <h3 className="section-title"> The Skills </h3>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
