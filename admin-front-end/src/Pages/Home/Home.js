import React, { Component } from 'react';

export default class extends Component {
state = {
    contacts: []
}
    getData = async (path) => {
        const url = `http://localhost:3001/contactus`
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)

        return data
      }
    
    displayInfo = (contacts) =>{
        const contactsElement = []
        for (const contact of contacts){
          contactsElement.push(this.renderContact(contact))
      }
        return contactsElement
      }

    renderContact = (contact) =>{
        return (
        <div key={contact.name + contact.lastName}>
          <p>{contact.name}</p>
          <p>{contact.lastName}</p>
          <p>{contact.email}</p>
          <p>{contact.phoneNumber}</p>
          <p>{contact.message}</p>
        </div>
        )
    }

    renderContacts = (contacts) => {
        const contactElements = contacts
        .filter((contact, index, array) => {
            console.log(contacts.name)
            return ("A"<= contacts.make && contact.make <= "Z")
            || ("a"<= contact.make && contact.make <= "z")
        })
        .map(this.renderContact)

        return contactElements
    }

    async componentDidMount() {
        const contactsResponse = await this.getData("/contactus")
        this.setState({ 
            contacts: contactsResponse.contacts
        })
        
      }
    

    componentWillMount() {
        this.getData ()
    }


    render(){
        return (
            <div>
            {this.renderContact(this.state.contacts)}
            </div>
        )
    }
}