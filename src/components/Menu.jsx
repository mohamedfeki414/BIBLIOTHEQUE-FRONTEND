import React from 'react';
import { Nav, Navbar, Container, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';
import './Menu.css'; // Importation du fichier CSS personnalisé
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useShoppingCart } from 'use-shopping-cart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Menu = () => {
  const { cartCount = 0 } = useShoppingCart();
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
          <Nav.Link as={Link} to="/listlivres">Livres</Nav.Link>
            <Nav.Link as={Link} to="/auteurs">Auteurs</Nav.Link>
            <Nav.Link as={Link} to="/listediteurs">Editeurs</Nav.Link>
            <Nav.Link as={Link} to="/specialites">Spécialités</Nav.Link>
            <Nav.Link as={Link} to="/users">Clients</Nav.Link>
            <Nav.Link as={Link} to="/Cart">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={cartCount > 0 ? cartCount : null} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
           
           
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
