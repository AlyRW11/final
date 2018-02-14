import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class ContactUs extends Component {
    state = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        Message: ""
    }

    onChangeHandler = (e) => {
        switch(e.target.id) {
            case "firstName":
                this.setState({firstName: e.target.value})
                break
            case "lastName":
                this.setState({lastName: e.target.value})
                break
            case "phoneNumber":
                this.setState({phoneNumber: e.target.value})
                break
            case "email":
                this.setState({email: e.target.value})
                break
            case "message":
                this.setState({message: e.target.value})
                break    
            default:

        }
    }


    clickHandler = async () => {
        // 
        const contact = await this.props.mutate({
            variables: this.state
          })
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    render () {
        return (
            <div>
                <div>First Name: <input id="firstName" type="text" onChange={this.onChangeHandler}/></div>
                <div>Last Name: <input  id="lastName" type="text" onChange={this.onChangeHandler}/></div>
                <div>Phone Number: <input  id="phoneNumber" type="text" onChange={this.onChangeHandler}/></div>
                <div>Email: <input id="email" type="text" onChange={this.onChangeHandler}/></div>
                <div>Message: <input id="message" type="text" onChange={this.onChangeHandler}/></div>
                <button onClick={this.clickHandler}>Create</button>
            </div>
        )
    }
}

const mutation = gql`
mutation (
    $firstName: String!
    $lastName: String!
    $phoneNumber: String!
    $email: String!
    $message: String!
){
    createContact(
        firstName: $firstName
        lastName: $lastName
        phoneNumber: $phoneNumber
        email: $email
        message: $message
    ){
        id
    }
}`

export default graphql(mutation)(ContactUs)
