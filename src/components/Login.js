import axios from "axios";
import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const Login = () => {


  const navigate = useNavigate()

  const handleLogin = (e) => {
    axios.post(process.env.REACT_APP_LOGIN_URL,
    {
      email:e.target.email.value,
      password:e.target.password.value
    }
    ).then(res=>{localStorage.setItem('token',res.data.token)})

  }


  return (
    <Row xs={2} >
      <Col className="m-auto">
        <Form className="border border-primary" style={{ padding: 20, marginTop: 100, borderRadius: 10 }}
          onSubmit={(e) => { handleLogin(e) }}
        >
          <Form.Group className="mb-3" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" id="email" required />

          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" id="password" required />
          </Form.Group>
          <Row>
            <Col>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
            <Col>
              <Form.Text>
                Dont have an account?
              </Form.Text>
              <p><u className="text-primary" type="button" onClick={() => navigate("/register")}>Sign up</u></p>
            </Col>
          </Row>

        </Form>
      </Col>
    </Row>
  );
};

export default Login;