import React, { Component } from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap'

export default class extends Component {
    state = { collapse: false }

    constructor(props){
        super(props)
        this.toggle = this.toggle.bind(this)
    }

    
    toggle() {
        this.setState({ collapse: !this.state.collapse });
      }
      
    render(){
        return(
            <div>
                
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Bautismos</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
           Inforcioan de bautismos
            </CardBody>
          </Card>
        </Collapse>

        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Bodas</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            Informacion de bodas va a ir aqui
            </CardBody>
          </Card>
        </Collapse>

        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Quinciañeras</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            INforcamion de quincianeras 
            </CardBody>
          </Card>
        </Collapse>
            </div>
        )
    }
}
