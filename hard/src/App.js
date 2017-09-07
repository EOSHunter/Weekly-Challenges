import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    function Contact(props) {

        const contacts = [
          {
            firstName: "Hunter",
            lastName: "Newton",
            phoneNumber: "803-804-4706"
          },

          {
            firstName: "Chris",
            lastName: "Hamilton",
            phoneNumber: "555-555-5555"
          },
          
          {
            firstName: "Malik",
            lastName: "Robinson",
            phoneNumber: "555-555-5555"
          },
        ];


      const contactsArraye = contacts.map(function(contact) {
        return ( 
          <Contact firstName={this.contact.firstName} lastName={this.contact.lastName} phoneNumber={this.contact.phoneNumber} />
        )
      })
    }

      return (
        <div>
          <li>You need to contact {this.props.firstName} {this.props.lastName} 
          at {this.props.phoneNumber}</li>
        </div>
      )

    return (
      <div className="sentence">
        <ul>{contactsArray}</ul>
      </div>
    )
  }
}

export default App;