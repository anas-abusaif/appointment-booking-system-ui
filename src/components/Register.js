import axios from "axios";
import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap"

const Register = () => {

  const handleRegister = async (e) =>{
    e.preventDefault()
    await axios.post("http://localhost:3000/api/user/register",{
      name:e.target.name.value,
      email:e.target.email.value,
      password:e.target.password.value,
      role:e.target.role.value
    })
  }

  return (
    <Row xs={2} >
    <Col className="m-auto">
    <Form className="border border-primary" style={{ padding: 20, marginTop: 100, borderRadius:10 }}
      onSubmit={(e)=>{handleRegister(e)}}
    >
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" id="name"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" id="email"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" id="password"/>
      </Form.Group>

      <Form.Label>Role</Form.Label>
      <Form.Select className="mb-3" id="role">
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