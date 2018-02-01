import React, { Component } from 'react'

export default class extends Component {
    state = {
        name: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        Message: ""
    }

    onChangeHandler = (e) => {
        switch(e.target.id) {
            case "name":
                this.setState({name: e.target.value})
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
                throw Error("Invalid Id")
        }
    }

    async postData(path, data) {
        const url = `http://localhost:3001${path}`
        const response = await fetch(url, {
            method: 'POST',
            mode: 'CORS',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(response)
        return response
    }

    clickHandler = async () => {
        await this.postData("/contactus", this.state)
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    render () {
        return (
            <div>
                <div>First Name: <input id="name" type="text" onChange={this.onChangeHandler}/></div>
                <div>Last Name: <input  id="lastName" type="text" onChange={this.onChangeHandler}/></div>
                <div>Phone Number: <input  id="phoneNumber" type="text" onChange={this.onChangeHandler}/></div>
                <div>Email: <input id="email" type="text" onChange={this.onChangeHandler}/></div>
                <div>Message: <input id="message" type="text" onChange={this.onChangeHandler}/></div>
                <button onClick={this.clickHandler}>Create</button>
            </div>
        )
    }
}