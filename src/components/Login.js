import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap"
import { useAuth } from "../context/auth";


const Login = () => {
  const {login, user}= useAuth()

  const handleLogin=(e)=>{
    e.preventDefault();
    login(e.target.email.value,e.target.password.value);
    console.log(user)
  }



  
  return (
    <Row xs={2} >
      <Col className="m-auto">
      <Form className="border border-primary" style={{ padding: 20, marginTop: 100, borderRadius:10 }}
        onSubmit={(e)=>{handleLogin(e)}}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail" id="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword" id="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Row>
          <Col>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
          <Col>
            <Form.Text>
              Dont have an account? <p className="text-primary"><u>Sign up</u></p>
            </Form.Text>
          </Col>
        </Row>

      </Form>
      </Col>
    </Row>
  );
};

export default Login;