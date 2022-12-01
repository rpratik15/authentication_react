import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function NavbarComponent() {
  return (

    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand as={NavLink} to="/">Module7</Navbar.Brand>
      <Nav className="me-auto justify-content-end">
        <Nav.Link as={NavLink} to="/">Signup</Nav.Link>
        <Nav.Link as={NavLink} to="/Profile">Profile</Nav.Link>
       
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavbarComponent