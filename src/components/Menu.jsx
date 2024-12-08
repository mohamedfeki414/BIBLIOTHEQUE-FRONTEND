import React from 'react'
import {Nav, Navbar,Container,Form,FormControl,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <Navbar bg="primary" variant="dark"> 
    <Container> 
    <Navbar.Brand >Gestion Commerciale</Navbar.Brand> 
    <Nav className="me-auto"> 
      <Nav.Link as={Link} to="/livres">Livres</Nav.Link> 
      <Nav.Link as={Link} to="/auteurs">Auteurs</Nav.Link> 
      <Nav.Link as={Link} to="/editeurs">Editeurs</Nav.Link> 
      <Nav.Link as={Link} to="/specialistes">Specialistes</Nav.Link>
    </Nav> 
    </Container> 
    <Form className="d-flex"> 
        <FormControl 
          type="search" 
          placeholder="Search" 
          className="me-2" 
          aria-label="Search" 
        /> 
        <Button variant="success">Chercher</Button> 
      </Form> 
 
  </Navbar>
  )
}

export default Menu
