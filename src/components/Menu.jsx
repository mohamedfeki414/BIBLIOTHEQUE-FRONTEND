import React from 'react';
import { Nav, Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './Menu.css'; 

const Menu = () => {
  return (
    <div className="menu-container">
      {/* Barre de navigation */}
      <Navbar expand="lg" className="navbar-custom shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand-custom">
            Bibliothèque Digitale
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/livres" className="nav-link-custom">
                Livres
              </Nav.Link>
              <Nav.Link as={Link} to="/auteurs" className="nav-link-custom">
                Auteurs
              </Nav.Link>
              <Nav.Link as={Link} to="/editeurs" className="nav-link-custom">
                Éditeurs
              </Nav.Link>
              <Nav.Link as={Link} to="/specialites" className="nav-link-custom">
                Spécialistes
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Rechercher..."
                className="search-input"
                aria-label="Search"
              />
              <Button variant="light" className="search-btn">
                <FaSearch />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
