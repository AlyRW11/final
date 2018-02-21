import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import Portfolio from './Pages/Portfolio'
import Pricing from './Pages/Pricing'
import Test from './Pages/Test'
import TestTwo from './Pages/TestTwo'

class App extends Component {
    state = { isOpen: false }
  
    <h3>SOLO EN LOS MEJORES EVENTOS</h3>
    <p></p>
    <footer>
        Magia Digital Studio Copyright&copy; 2009
</footer>
</div>
    constructor(props) {
    super(props)
  }
  
    toggle = () => {
    this.setState({dropdownOpen: !this.state.dropdownOpen})
  }
    render() {
      return (
        <div className="App">
  <Router>
    <div>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/aboutus">About Us </Link>
        <Link to="/portfolio">Projects </Link>
        <Link to="/pricing">Pricing </Link>
        <Link to="/contactus">Contact Us </Link>
        <Link to="/test"> Test </Link>
        <Link to="/testtwo"> Test2 </Link>
      </nav>
      <Route exact path="/" component={Home}/>
      <Route path="/aboutus" component={AboutUs}/>
      <Route path="/contactus" component={ContactUs}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/pricing" component={Pricing}/>
      <Route path="/test" component={Test}/>
      <Route path="/testtwo" component={TestTwo}/>
    </div>
   </Router>
  </div> 
      )
    }
  }

  //Pricing buttons 

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
        <Button color="primary" 
        onClick={this.toggle} 
        style={{ marginBottom: '1rem' }}>Bodas</Button>
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
