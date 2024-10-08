import {Container, Nav, Navbar} from 'react-bootstrap';


export default function Menu() {
  return (
    <Navbar expand="lg" className="degrademenu">
      <Container>
        <Navbar.Brand href="#home">6V</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

