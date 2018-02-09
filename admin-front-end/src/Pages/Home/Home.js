import React, {Component} from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'


class Home extends Component {

    renderContact = (contact) =>{
        return (
        <div key={contact.name + contact.lastName}>
          <p>{contact.firstName}</p>
          <p>{contact.lastName}</p>
          <p>{contact.email}</p>
          <p>{contact.phoneNumber}</p>
          <p>{contact.message}</p>
        </div>
        )
    }

    renderContacts = (contacts) => {
        console.log(contacts,this.props.data.allContacts)
        const contactElements = contacts.map(this.renderContact)

        return contactElements
    }

    render(){
        if(!this.props.data.allContacts){
            return (
                <div>loading</div>
            )
        }
        return(
            <div>
            {this.renderContacts(this.props.data.allContacts)}
            </div>
        )
    }
}

const query = gql `query {
    allContacts{
      firstName lastName phoneNumber email message
    }
  }`

  export default graphql(query)(Home)