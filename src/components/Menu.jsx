import React from 'react';
import { Nav, Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBook, FaSearch } from 'react-icons/fa';

const Menu = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <FaBook className="me-2" />
          GESTION BIBLIOTHEQUE 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/livres">Livres</Nav.Link>
            <Nav.Link as={Link} to="/auteurs">Auteurs</Nav.Link>
            <Nav.Link as={Link} to="/editeurs">Éditeurs</Nav.Link>
            <Nav.Link as={Link} to="/specialistes">Spécialistes</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Rechercher un livre, auteur..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">
              <FaSearch className="me-1" />
              Chercher
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;

