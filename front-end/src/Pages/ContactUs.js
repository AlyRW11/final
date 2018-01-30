import React, { Component } from 'react'

export default class extends Component {
    state = {
        name: "",
        lastName: "",
        phoneNumber: 0,
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
                this.setState({year: Number(e.target.value)})
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

    

    render () {
        return (
            <div>Contact information will go here</div>
        )
    }
}