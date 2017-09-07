import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    function Header(props) {
      return (
        <div className="header">
          <h1>You need to contact: {props.fname} {props.lname} {props.phone}</h1>
        </div>
    )
    }
    return (
      <div className="root">
        <Header fname = "Hunter" lname = "Newton" phone = "(803)-804-4706"/>
      </div>
    );
  }
}

export default App;