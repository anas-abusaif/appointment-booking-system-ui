import axios from "axios";
import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap"
import {useNavigate} from "react-router-dom"

const Register = () => {
  
  const navigate = useNavigate()

  const handleRegister = async (e) =>{
    e.preventDefault();

    navigate('/');

    await axios.post(process.env.REACT_APP_REGISTER_URL,{
      name:e.target.name.value,
      email:e.target.email.value,
      password:e.target.password.value,
      role:e.target.role.value
    });
  }

  return (
    <Row xs={2} >
    <Col className="m-auto">
    <Form className="border border-primary" style={{ padding: 20, marginTop: 100, borderRadius:10 }}
      onSubmit={(e)=>{handleRegister(e)}}
    >
      <Form.Group className="mb-3">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" id="name" required/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" id="email" required/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" id="password" required/>
      </Form.Group>

      <Form.Label className="mr-20">Role</Form.Label>
      <Form.Select id="role" style={{borderRadius:5, marginLeft:20}} >
        <option value="Buyer">Buyer</option>
        <option value="Seller">Seller</option>
      </Form.Select>

      <Row>
        <Col>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
      </Row>

    </Form>
    </Col>
  </Row>
  );
};

export default Register;