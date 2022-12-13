import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import './style.css'
import { useHistory } from "react-router-dom";


// const generateToken = (length) => {
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let result = ' ';
//   const charactersLength = characters.length;
//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }

//   return result;
// }
const Signup = () => {

  const navigate = useHistory();
  const [userDetails, setUserDetails] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    token: ''

  })
  const { fullName, email, password, confirmPassword } = userDetails
  const [error, setError] = useState(false)
  const [submit, setSubmit] = useState(false)
  // const [success, setSuccess] = useState(false)
  useEffect(() => {

    const generateToken = () => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = ' ';
      const charactersLength = characters.length;
      for (let i = 0; i < 16; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }

      return result;
    }
    var userInfo = { 'fullName': fullName, 'email': email, 'password': password, 'token': generateToken() }
    // if (submit && !Object.values(error).includes(true)) {
    if (submit && !error) {
      // setSuccess(true)
      localStorage.setItem("userInfo", JSON.stringify(userInfo))

      if (!error) {
        setTimeout(() => {
          navigate.push('/Profile')
        }, 2000);

      }




    }

  }, [submit, error])

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmit(true)
    // const { fullName, email, password, confirmPassword } = userDetails
    if (fullName.length === 0 || email.length === 0 || password.length === 0 || confirmPassword.length === 0) {
      setError(true);
    }
    else {
      setError(false)



    }

  }
  return (
    <Container className='main-container'>
      <h1 className='display-4'>Signup</h1>
      <br />
      <br />
      <Form onSubmit={handleSubmit}>
        {/* <Form > */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name"
            value={fullName}
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
                fullName: e.target.value

              })
            }
          />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"
            value={email}
            onChange={
              (e) => setUserDetails({
                ...userDetails,
                email: e.target.value
              })
            }
          />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"
            value={password}
            onChange={
              (e) => setUserDetails({
                ...userDetails,
                password: e.target.value
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password"
            value={confirmPassword}
            onChange={
              (e) => setUserDetails({
                ...userDetails,
                confirmPassword: e.target.value
              })
            }
            onBlur={(e) => {

              if (confirmPassword !== password) {
                alert('Confirm password mismatch!!!')
                setUserDetails({
                  ...userDetails,
                  confirmPassword: ''
                })

                console.log(password + " " + confirmPassword);


                setError(true)
              }
            }}

          />
        </Form.Group>
        {submit && (error ? (
          // <Form.Control.Feedback type="invalid" style={{color:'red'}}>
          <p style={{ color: 'red' }}>

            Error!! All fields are manditory
          </p>
          // </Form.Control.Feedback>
        ) : (<p style={{ color: 'green' }}>

          Successfully!! Signed up!!
        </p>)
          //   <Form.Control.Feedback type="valid" style={{color:'green'}}>
          //   Successfully Signup!!
          // </Form.Control.Feedback>
          // <p>Successfully Signup!!</p>

        )}


        <br />
        <br />
        <Button variant="light" type="submit">
          Signup
        </Button>

      </Form>
    </Container>
  )
}

export default Signup