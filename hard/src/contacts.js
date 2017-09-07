import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Contact(props) {

      function eachContact() {
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
      }

      const contactsArray = contacts.map(function(contacts) {
        return ( 
          <Contact firstName={contact.firstName} lastName={contact.lastName} phoneNumber={contact.phoneNumber} />
        )
      })