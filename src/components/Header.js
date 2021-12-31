import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Button} from 'react-bootstrap';

export default function Header() {

  return (
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand >User</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button variant='danger'>Sign out</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>


  );
};
