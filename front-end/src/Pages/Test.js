import React, { Component } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap'

export default class extends Component {
  state = { dropDownOpen: false }

  constructor(props) {
    super(props)
  }

  toggle = () => {
    this.setState({dropdownOpen: !this.state.dropdownOpen})
  }

  render(){
    return(
      <div>
        <Nav tabs>
          <NavItem>
          <NavLink href="/" active> Home </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/aboutus" active> About Us </NavLink>
          </NavItem>
          <NavItem>
          <NavLink href="/pixandflix" active> Portfolio </NavLink>
          </NavItem>
          <NavItem>
          <NavLink href="/pricing" active> Pricing </NavLink>
          </NavItem>
          <NavItem>
          <NavLink href="/contactus" active> Contact Us </NavLink>
          </NavItem>
        </Nav>
      </div>
    )
  }
}

 