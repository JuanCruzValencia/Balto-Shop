import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import WishWidget from "../widgets/WishWidget";
import { FaRegUser } from "react-icons/fa";
import CartWidget from "../widgets/CartWidget";
import "./Navbar.css";

function NavBar() {

  return (
    <Navbar
      className="d-flex justify-content-between"
      expand="lg"
      id="navbar__container"
    >
      <Container className="d-flex justify-content-start align-items-center p-2">
        <Navbar.Brand as={Link} to="/" className="ps-4 fs-3">
          Balto
        </Navbar.Brand>
        <Nav className="nav__ul fs-5">
          <NavDropdown title="Shop" className="nav__li">
            <NavDropdown.Item as={Link} to={`/category/men's clothing`}>
              Ropa Hombre
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to={`/category/jewelery`}>
              Joyeria
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to={`/category/electronics`}>
              Electronica
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to={`/category/women's clothing`}>
              Ropa Mujer
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/about" className="nav__li">
            Sobre mi
          </Nav.Link>
        </Nav>
      </Container>
      <Container className="d-flex justify-content-end align-items-center pe-4">
        <WishWidget />
        <Link to="/cart" className="icons__li">
          <CartWidget />
        </Link>
        <Link to="/login" className="icons__li">
          <FaRegUser />
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;
