import React from 'react';
import { Nav, Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaBook, FaSearch } from 'react-icons/fa';
import './Menu.css'; // Importation du fichier CSS personnalisé


const Menu = () => {

  const navigate = useNavigate();

  // Fonction pour gérer la déconnexion
  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Suppression du token d'authentification
    navigate('/login'); // Redirection vers la page de connexion
  };

  return (
    <Navbar variant="dark" expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/accu">
          <FaBook className="me-2" />
          GESTION BIBLIOTHÈQUE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/livres">Livres</Nav.Link>
            <Nav.Link as={Link} to="/auteurs">Auteurs</Nav.Link>
            <Nav.Link as={Link} to="/editeurs">Éditeurs</Nav.Link>
            <Nav.Link as={Link} to="/specialites">Spécialités</Nav.Link>
            <Nav.Link as={Link} to="/listlivres">Livres Table</Nav.Link>
            <Nav.Link as={Link} to="/listediteurs">Editeurs Table</Nav.Link>
           
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Rechercher un livre, auteur..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success" className="me-2">
              <FaSearch className="me-1" />
              Chercher
            </Button>
            <Button variant="outline-primary" onClick={() => navigate('/accu')} className="me-2">
              Accueil
            </Button>
            <Button variant="outline-danger" onClick={handleLogout}>
              Déconnexion
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
