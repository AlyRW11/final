import React, { Component } from 'react'
import {
  Collapse, Button, CardBody, Card, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle
} from 'reactstrap'

class Pricing extends Component {
  constructor(props) {
    super(props)
  }


  toggle = () => {
    this.setState({ collapse: !this.state.collapse })
  }

  onClick()


  render() {
    return (
      <div>
        <CardDeck>
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>Bautizos y Primera Comunion</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <Button onClick={this.toggle}>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>Bodas y Quinceañeras</CardTitle>
              <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>Fotos Familiares</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </CardDeck>
      </div>
    )
  }
}