import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './style.css'

function NavbarComponent() {
  return (

    <Navbar bg="light" variant="light" >
    <Container> 
      <Navbar.Brand as={NavLink} to="/">Module7</Navbar.Brand>
      <Nav className="justify-content-end">
        <Nav.Link as={NavLink} to="/">Signup</Nav.Link>
        <Nav.Link as={NavLink} to="/Profile">Profile</Nav.Link>
       
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavbarComponent