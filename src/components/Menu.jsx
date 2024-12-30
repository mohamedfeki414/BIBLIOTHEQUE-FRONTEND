import React from 'react';
import { Nav, Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link ,useNavigate } from 'react-router-dom';
import { FaBook, FaSearch } from 'react-icons/fa';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useShoppingCart } from 'use-shopping-cart';

import './Menu.css'; // Importez le fichier CSS personnalisé
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
const Menu = () => {
  const {cartCount=0}=useShoppingCart();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/api/logout', {}, { withCredentials: true });
      alert('Déconnexion réussie');
      navigate('/login');
    } catch (error) {
      alert('Erreur lors de la déconnexion');
    }
  };
  return (
   
    <Navbar variant="dark" expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="accu">
          <FaBook className="me-2" />
          GESTION BIBLIOTHEQUE 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/livres">Livres</Nav.Link>
            <Nav.Link as={Link} to="/auteurs">Auteurs</Nav.Link>
            <Nav.Link as={Link} to="/editeurs">Éditeurs</Nav.Link>
            <Nav.Link as={Link} to="/specialites">Spécialité</Nav.Link>
            <Nav.Link as={Link} to="/listlivres">livres Table</Nav.Link>
            <Nav.Link as={Link} to="/Cart">
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
            <Button variant="success">
              <FaSearch className="me-1" />
              Chercher
            </Button>
            <button onClick={() => navigate('/accu')}>Accueil</button>
            <button onClick={handleLogout}>Déconnexion</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  ) 
};

export default Menu;
