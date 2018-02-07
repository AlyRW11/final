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

//  <div className="App">
// <Router>
//   <div>
//     <nav>
//       <Link to="/">Home </Link>
//       <Link to="/aboutus">About Us </Link>
//       <Link to="/pixandflix">Projects </Link>
//       <Link to="/pricing">Pricing </Link>
//       <Link to="/contactus">Contact Us </Link>
//       <Link to="/test"> Test </Link>
//       <Link to="/testtwo"> Test2 </Link>
//     </nav>
//     <Route exact path="/" component={Home}/>
//     <Route path="/aboutus" component={AboutUs}/>
//     <Route path="/contactus" component={ContactUs}/>
//     <Route path="/pixandflix" component={PixAndFlix}/>
//     <Route path="/pricing" component={Pricing}/>
//     <Route path="/test" component={Test}/>
//     <Route path="/testtwo" component={TestTwo}/>
//   </div>
// </Router>
// </div> 