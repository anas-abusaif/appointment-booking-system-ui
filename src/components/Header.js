import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import jwt from "jsonwebtoken";

export default function Header() {

  const [user, setUser] = useState(0)

  useEffect(() => {
    let token = localStorage.getItem('token')
    const storedUser = jwt.decode(token)
      if (storedUser){
        setUser(storedUser)
    }
  }, [])

console.log(user)
  const logout = () => {
    localStorage.clear()
    setUser()
  }

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        {user ?
          <>
            <Navbar.Brand >{user.name} ({user.role})</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Button variant='danger' onClick={() => logout()}>Sign out</Button>
            </Navbar.Collapse>
          </> :
          <Navbar.Brand >Please Login Or Register</Navbar.Brand>
        }
      </Container>
    </Navbar>
  );
};
