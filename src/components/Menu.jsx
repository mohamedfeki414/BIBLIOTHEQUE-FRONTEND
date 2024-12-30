import React from 'react';
import { Nav, Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaBook, FaSearch } from 'react-icons/fa';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useShoppingCart } from 'use-shopping-cart';
import './Menu.css'; // Importation du fichier CSS personnalisé

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Menu = () => {
  const { cartCount } = useShoppingCart() || { cartCount: 0 }; // Ajout d'une valeur par défaut pour éviter les erreurs
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch('http://localhost:5000/api/logout', {
        method: 'POST',
        credentials: 'include',
      });
      alert('Déconnexion réussie');
      navigate('/login');
    } catch (error) {
      alert('Erreur lors de la déconnexion');
    }
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
            <Nav.Link as={Link} to="/cart">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={cartCount} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Nav.Link>
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
