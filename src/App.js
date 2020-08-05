import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import NavBar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './App.css';

import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProjectsPage from './pages/ProjectsPage'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Ambu Karthik', 
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Projects', path: '/projects' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Ambu Karthik'
      },
      about: {
        title: 'Hi there',
        text: 'I am Ambu Karthik'
      },
      projects: {
        title: 'My projects'
      },
      contact: {
        title: 'Contact me'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className='p-0' fluid={true}>

            <NavBar className='border-bottom' background='transparent' expand='lg'>
              <NavBar.Brand>Ambu Karthik</NavBar.Brand>
              <NavBar.Toggle aria-controls='navbar-toggle'/>
              <NavBar.Collapse id='navbar-toggle'>
                <Nav className='ml-auto'>
                  <Link className='nav-link' to='/'>Home</Link>
                  <Link className='nav-link' to='/about'>About</Link>
                  <Link className='nav-link' to='/projects'>Projects</Link>
                  <Link className='nav-link' to='/contact'>Contact</Link>
                </Nav>
              </NavBar.Collapse>
            </NavBar>

            <Route path='/' exact render={() => <HomePage title={this.state.home.title}/>}/>
            <Route path='/about' exact render={() => <AboutPage title={this.state.about.title} text={this.state.about.text}/>}/>
            <Route path='/contact' exact render={() => <ContactPage title={this.state.contact.title}/>}/>
            <Route path='/projects' exact render={() => <ProjectsPage title={this.state.projects.title}/>}/>

            <Footer/>
        </Container>
      </Router>
    );
  }  
}

export default App;
