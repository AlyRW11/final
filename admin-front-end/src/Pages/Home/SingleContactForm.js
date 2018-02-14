import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {updateContact} from './Service'
import {withRouter} from 'react-router-dom'
import DeleteButton from './DeleteButton'

class SingleContactForm extends Component {
    state = {
        id: this.props.id,
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        phoneNumber: this.props.phoneNumber,
        email: this.props.email,
        Message: this.props.message
    }
    onChangeHandler = (e) => {
        switch (e.target.id) {
            case "firstName":
                this.setState({ firstName: e.target.value })
                break
            case "lastName":
                this.setState({ lastName: e.target.value })
                break
            case "phoneNumber":
                this.setState({ phoneNumber: e.target.value })
                break
            case "email":
                this.setState({ email: e.target.value })
                break
            case "message":
                this.setState({ message: e.target.value })
                break
            default:

        }
    }

    updateContact = (evt) => {
        evt.preventDefault(
            this.props.mutate({
                variables: this.state
            }).then ((res) =>{
                this.setState({res: true})
                console.log('success')
            }).catch ((e) => {
                throw e
            })
        )}

    render() {
        console.log(this.state)

        return (
            <div>
                <div>First Name: <input id="firstName" placeholder={this.props.firstName} type="text" onChange={this.onChangeHandler} /></div>
                <div>Last Name: <input id="lastName" placeholder={this.props.lastName} type="text" onChange={this.onChangeHandler} /></div>
                <div>Phone Number: <input id="phoneNumber" placeholder={this.props.phoneNumber} type="text" onChange={this.onChangeHandler} /></div>
                <div>Email: <input id="email" placeholder={this.props.email} type="text" onChange={this.onChangeHandler} /></div>
                <div>Message: <input id="message" placeholder={this.props.message} type="text" onChange={this.onChangeHandler} /></div>
                <button onClick={this.updateContact}>Save</button>
                <DeleteButton id={this.state.id}/>
            </div>
        )
    }

}

export default withRouter(graphql(updateContact)(SingleContactForm))