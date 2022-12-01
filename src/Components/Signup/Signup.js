import React from 'react'
import {Container,Form,Button} from 'react-bootstrap'
import './style.css'

const Signup=() => {
  return (
   <Container className='main-container'>
    <h1 className='display-2'>Signup</h1>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your full name" />

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />

     
      </Form.Group>
      <Form.Control.Feedback type="invalid" style={{color:'red'}}>
              Error!! All fields are manditory
            </Form.Control.Feedback>
            <Form.Control.Feedback type="valid" style={{color:'green'}}>
              Successfully Signup!!
            </Form.Control.Feedback>
      <Button variant="light" type="submit">
        Signup
      </Button>
      <Form.Control.Feedback>Looks good!!</Form.Control.Feedback>
    </Form>
   </Container>
  )
}

export default Signup