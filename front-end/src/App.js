import React, { Component } from 'react'
// import logo from './logo.svg'
import {Switch, Route} from 'react-router-dom'
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
import AppConfig from './AppConfig'

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
        <NavbarBrand className="" href="/"> Magia Digital Studio </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/aboutus">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Porfolio">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Pricing">Pricing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/ContactUs">Contact Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/TestTwo">Test 2</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Test">Test</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={`${AppConfig.adminSiteRoot}`}>Admin</NavLink>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/aboutus" component={AboutUs}/>
      <Route path="/contactus" component={ContactUs}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/pricing" component={Pricing}/>
      <Route path="/test" component={Test}/>
      <Route path="/testtwo" component={TestTwo}/>
      </Switch>
    </div>
    )
  }
}

export default App;

