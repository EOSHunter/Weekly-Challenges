import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    function Header(props) {
      return (
        <div className="header">
          <h1>Hello World, {props.name}</h1>
        </div>
    )
    }
    return (
      <div className="root">
        <Header name = "Hunter"/>
      </div>
    );
  }
}

export default App;