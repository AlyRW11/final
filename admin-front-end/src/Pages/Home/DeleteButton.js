import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {deleteContact} from './Service'
import {withRouter, Redirect} from 'react-router-dom'
import SingleContactForm from './SingleContactForm'

class DeleteButton extends Component {
    state = {
        id: this.props.id,
        redirect: false
    }
    deleteContact = (evt) => {
        evt.preventDefault(
            this.props.mutate({
                variables: this.state
            }).then ((res) =>{
                this.setState({res: true})
                console.log('success')
                this.setState({
                    redirect: true
                })
            }).catch ((e) => {
                throw e
            })
        )}
    render(){
        const {redirect} = this.state
        if(redirect){
            return <Redirect to='/'/>
        }
        return(
            <button onClick={this.deleteContact}>Delete</button>
        )
    }
}

export default withRouter(graphql(deleteContact)(DeleteButton))