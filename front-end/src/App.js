import React, { Component } from 'react'
// import logo from './logo.svg'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import PixAndFlix from './Pages/PixAndFlix'
import Pricing from './Pages/Pricing'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <nav>
            <Link to="/">Home </Link>
            <Link to="/aboutus">About Us </Link>
            <Link to="/pixandflix">Projects </Link>
            <Link to="/pricing">Pricing </Link>
            <Link to="/contactus">Contact Us </Link>
          </nav>
          <Route exact path="/" component={Home}/>
          <Route path="/aboutus" component={AboutUs}/>
          <Route path="/contactus" component={ContactUs}/>
          <Route path="/pixandflix" component={PixAndFlix}/>
          <Route path="/pricing" component={Pricing}/>
        </div>
      </Router>
      </div>
    )
  }
}

export default App;

