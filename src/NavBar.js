import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/NavBar";
import Container from "react-bootstrap/Container";
import "./NavBar.scss";

const NavBar = (props) => {
  return (
    <div className="head">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="index.html">Birthday</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Contents</Nav.Link>
            <Nav.Link href="#features">Peoples</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <br />
    </div>
  );
};
export default NavBar;
