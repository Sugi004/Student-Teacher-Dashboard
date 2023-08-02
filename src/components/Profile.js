import React from 'react'
import Image from 'react-bootstrap/Image';
import { useNavigate, useParams } from 'react-router-dom'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Profile({users, setUsers}) {
    let navigate = useNavigate()
    let params = useParams()
  return<>
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800" style={{marginTop:"10px"}}>Profile</h1>
    </div>
    <div style={{textAlign:"center"}}>
        <Image src={users[params.id].img} style={{width:"180px", height:"180px"}} roundedCircle/>
     
    </div> <br/>

    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label style={{fontSize:"20px", fontWeight:"600"}}>Name</Form.Label>
        <Form.Control  disabled readOnly defaultValue={users[params.id].name}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:"20px", fontWeight:"600"}}>Email ID</Form.Label>
        <Form.Control disabled readOnly defaultValue={users[params.id].email} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{fontSize:"20px", fontWeight:"600"}}>Mobile</Form.Label>
        <Form.Control readOnly disabled defaultValue={users[params.id].mobile}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{fontSize:"20px", fontWeight:"600"}}>Address</Form.Label>
        <Form.Control readOnly disabled defaultValue={users[params.id].address} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{fontSize:"20px", fontWeight:"600"}}>Password</Form.Label>
        <Form.Control readOnly disabled type="password" defaultValue={users[params.id].password}/>
      </Form.Group>

      <div style={{textAlign:"center"}}>
        <Button variant="primary" type="submit" onClick={()=>{navigate(`/edit-profile/${params.id}`)}}>
          Edit Profile
        </Button>
      </div>
    </Form>

  </>
}

export default Profile