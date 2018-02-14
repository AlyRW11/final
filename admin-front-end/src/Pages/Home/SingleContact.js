import React, {Component} from 'react'
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'
import {querySingleContact} from './Service'
import SingleContactForm from './SingleContactForm'

 class singleContact extends Component{
     render(){
        let id = this.props.match.params.id

        
        console.log(id)
         if(!this.props.data.Contact){
             return <div>Loading</div>
         }
         return(
             <div>

            <SingleContactForm 
            id={this.props.data.Contact.id}
            firstName={this.props.data.Contact.firstName} 
            lastName={this.props.data.Contact.lastName} 
            phoneNumber={this.props.data.Contact.phoneNumber} 
            email={this.props.data.Contact.email} 
            message={this.props.data.Contact.message}/>
             </div>
         )
     }
 }


 
 export default graphql(querySingleContact, {
     options: (props) => ({variables: { id: props.match.params.id }, 
    })
 })(singleContact)