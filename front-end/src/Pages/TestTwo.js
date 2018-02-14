import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Collapse } from 'reactstrap'

class Pricing extends Component {
  state = {
    collapse: false 
  }

  constructor(props) {
    super(props);
  }

  toggle= () =>  {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return(
      <div>
        <Button className='pricing-one' onClick={this.toggle} style={{ marginBottom: '1rem' }}>See More</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            Pricing one.
            </CardBody>
          </Card>
        </Collapse>

        <Button className='pricing-one' onClick={this.toggle} style={{ marginBottom: '1rem' }}>See More</Button>
        <Collapse isOpen={this.state.collapse}>
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