import React, { Component } from 'react'
// import logo from './logo.svg'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand,
  Nav, NavItem, NavLink, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import Portfolio from './Pages/Portfolio'
import Pricing from './Pages/Pricing'
import Test from './Pages/Test'
import TestTwo from './Pages/TestTwo'
import './App.css'

class App extends Component {
  state = { isOpen: false }

  constructor(props) {
  super(props)
}

  toggle = () => {
  this.setState({dropdownOpen: !this.state.dropdownOpen})
}
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/"> Magia Digital Studio </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/aboutus">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/pixandflix">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contactus">Contact Us</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Pricing
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    Bautismos
                  </DropdownItem>
                  <DropdownItem>
                    Bodas
                  </DropdownItem>
                  <DropdownItem>
                    Quinciañeras
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default App;

