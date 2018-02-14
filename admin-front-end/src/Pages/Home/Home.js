import React, {Component} from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
const FontAwesome = require('react-fontawesome')

class Home extends Component {

    renderContact = (contact) =>{
        return (
        <div key={contact.name + contact.lastName}>
        <a href={`contact/${contact.id}`}> {contact.firstName} </a>
        {contact.lastName}
        {contact.email}
        {contact.phoneNumber}
          {contact.message}
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
                <div className="">

<FontAwesome
  className='center-spinner'
  name='rocket'
  size='4x'
  spin
  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
/>
<h1 className="center-h1-loading">Loading</h1>
</div>
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
      id firstName lastName phoneNumber email message
    }
  }`

  export default graphql(query)(Home)