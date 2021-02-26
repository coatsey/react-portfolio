import React from 'react';
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

import Footer from './components/Footer';
import HomePage from './pages/HomePage';

import './App.css';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Logan Coates',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'Portfolio', path: '/portfolio'},
        { title: 'Contact', path: '/contact'},
      ],
      Home: {
        title: "About Me",
        subTitle: 'Hello',
        text: ''
      },
      portfolio: {
        title: "My Portfolio",
        
      },
      contact: {
        title: "Contact Me",
      },
    }
  }

  render() {
    return (
      <Router>
        <Container className= "p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Logan Coates</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>


          <Route path="/" exact render={() => <HomePage  title={this.state.Home.title} subTitle={this.state.Home.subTitle} text={this.state.Home.text} />} />
          <Route path="/portfolio" exact render={() => <Portfolio title={this.state.portfolio.title}  />} />
          <Route path="/contact" exact render={() => <Contact title={this.state.contact.title}  />} />

          <Footer />
          
        </Container>
      </Router>
    );
  }
}

export default App;
