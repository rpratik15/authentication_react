import React from 'react'
import {Container,Form,Button} from 'react-bootstrap'
import { useState,useEffect } from 'react'
import './style.css'

const Signup=() => {
  const [userDetails,setUserDetails]=useState({
    fullName:'',
    email:'',
    password:'',
    confirmPassword:''

  })
  const [error,setError]=useState(false)
  const [submit, setSubmit] = useState(false)
	const [success, setSuccess] = useState(false)
  useEffect(() => {
		if(submit && !Object.values(error).includes(true)){
			setSuccess(true)
			setUserDetails({
				fullName:'',
    email:'',
    password:'',
    confirmPassword:''
			})
		}
	}, [submit, error])

  const handleSubmit=(e)=>{
    e.preventDefault();
    setSubmit(true)
    const {fullName,email,password,confirmPassword}=userDetails
    if(fullName.length===0 || email.length===0 || password.length===0 || confirmPassword.length===0)
    {
      setError(false);
    }
  }
  return (
   <Container className='main-container'>
    <h1 className='display-2'>Signup</h1>
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your full name" 
        value={userDetails.fullName}
        onChange={(e)=>
          setUserDetails({
            ...userDetails,
            fullName:e.target.value
          })
        }
        />

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
        value={userDetails.email} 
        onChange={
          (e)=>setUserDetails({
            ...userDetails,
            email:e.target.value
          })
        }/>

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
        value={userDetails.password}
        onChange={
          (e)=>setUserDetails({
            ...userDetails,
            password:e.target.value
          })
        }
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" 
        value={userDetails.password}
        onChange={
          (e)=>setUserDetails({
            ...userDetails,
            password:e.target.value
          })
        }
        />
        {submit && !success && (error.firstName ? (
              <Form.Control.Feedback type="invalid" style={{color:'red'}}>
              Error!! All fields are manditory
            </Form.Control.Feedback>
            ) : (
              <Form.Control.Feedback type="valid" style={{color:'green'}}>
              Successfully Signup!!
            </Form.Control.Feedback>
            ))}
     
      </Form.Group>
     
           
      <Button variant="light" type="submit">
        Signup
      </Button>
      <Form.Control.Feedback>Looks good!!</Form.Control.Feedback>
    </Form>
   </Container>
  )
}

export default Signup