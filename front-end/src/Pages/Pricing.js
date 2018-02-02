import React, { Component } from 'react'

export default class extends Component {
    state = {
        count: 0
    }

    handlerClick() {
        console.log("something")
    }

    render(){
        return(
            <div>
               <button onClick={(e) =>{
                   this.setState((prevState) => {
                       return{
                           orderCount: prevState.orderCount + 1
                       }
                   })
               }}> Package One </button>
               <p>Order Count = {this.state.orderCount}</p>
             </div>
        )
    }
}
