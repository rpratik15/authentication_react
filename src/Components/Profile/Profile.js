import React from 'react'
import './style.css'
import { Container, Button} from 'react-bootstrap'


function Profile() {
  return (
    
    
    <Container className='info'>
     
     <h1 className="display-1" style={{textAlign:'left'}}>Profile</h1>
      <br/>
      <br/>
        <h3 className='user-info'>Full Name :</h3>
        <br/>
      <br/>
        <h3 className='user-info'>Email :</h3>
        <br/>
      <br/>
        <h3 className='user-info'>Password :</h3>
        <br/>
      <br/>
      <br/>
      
      <Button variant="light" type="submit">
        Log Out
      </Button>
    </Container>
    

  )
}

export default Profile