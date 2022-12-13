import React, { useEffect, useState } from 'react'
import './style.css'
import { Container, Button, Alert } from 'react-bootstrap'
import { useHistory } from "react-router-dom";


function Profile() {

  const navigate = useHistory();
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    const Info = JSON.parse(localStorage.getItem("userInfo"));



    setUserInfo(Info)

  }, [])

  useEffect(() => {

    if (userInfo.token === null)
      navigate.push('/Signup')
  }, [userInfo])

  const deleteData = () => {
   
    let updatedData = { 'token': null };
    const newData = {
      ...JSON.parse(localStorage.getItem('userInfo')),
      ...updatedData
    };
    localStorage.setItem('userInfo', JSON.stringify(newData));

    alert('Loged out successfully!!!')
    // <Alert key='success' variant='success'>
    //       Loged out successfully!!!
    //     </Alert>
  }


  return (


    <Container className='info'>

      <h1 className="display-4" style={{ textAlign: 'left' }}>Profile</h1>
      <br />
      <br />
      <h3 className='user-info'>Full Name : {userInfo.fullName}</h3>
      <br />
      <br />
      <h3 className='user-info'>Email : {userInfo.email}</h3>
      <br />
      <br />
      <h3 className='user-info'>Password : {userInfo.password}</h3>
      <br />
      <br />
      <br />

      <Button variant="light" onClick={deleteData}>
        Log Out
      </Button>
    </Container>


  )
}

export default Profile