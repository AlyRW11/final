import React, { Component } from 'react';
import {
  Collapse, Button, CardBody, Card, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle
} from 'reactstrap';
// import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
//   CardSubtitle, CardBody, Collapse } from 'reactstrap'

class Pricing extends Component {
  state = {
    collapse1: false,
    collapse2: false
  }

  toggle = (e) => {
    const desiredState = {
      collapse1: false,
      collapse2: false
    }
    if (e.target.id === "1") {
      this.setState((prevState) => {
        desiredState.collapse1 = !prevState.collapse1
        return desiredState
      })
    }
    if (e.target.id === "2") {
      this.setState((prevState) => {
        desiredState.collapse2 = !prevState.collapse2ß
        return desiredState
      })
  }
}

  render() {
    return (
      <div>
        <Button className='pricing-one' id="1" onClick={this.toggle} style={{ marginBottom: '1rem' }}>See More</Button>
        <Collapse isOpen={this.state.collapse1}>
          <Card>
            <CardBody>
              Pricing one.
            </CardBody>
          </Card>
        </Collapse>

        <Button className='pricing-one' id="2" onClick={this.toggle} style={{ marginBottom: '1rem' }}>See More</Button>
        <Collapse isOpen={this.state.collapse2}>
          <Card>
            <CardBody>
              Pricing two.
            </CardBody>
          </Card>
        </Collapse>
      </div>
    )
  }
}

export default Pricing