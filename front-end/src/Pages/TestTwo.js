import React, { Component } from 'react'
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand,
    Nav, NavItem, NavLink, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

export default class extends Component {
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
                <NavLink href="/components/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Contact Us</NavLink>
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
    );
  }
}

// Navbar.propTypes = {
//     light: PropTypes.bool,
//     dark: PropTypes.bool,
//     fixed: PropTypes.string,
//     color: PropTypes.string,
//     role: PropTypes.string,
//     expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
//     tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
//     // pass in custom element to use
//   }

//   NavbarBrand.propTypes = {
//     tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
//     // pass in custom element to use
//   }

