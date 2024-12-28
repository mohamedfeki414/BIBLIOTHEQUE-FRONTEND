import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="menu-body">
      <div className="text-center py-5" >
        <h1>Bienvenue à la Bibliothèque</h1>
        <p className="lead">
          Explorez une vaste collection de livres, rencontrez des auteurs fascinants et découvrez de nouvelles spécialités.
        </p>
        <Button as={Link} to="/livres" variant="primary" size="lg" className="mt-3">
          Explorer maintenant
        </Button>
      </div>
    </section>
  );
};

export default Home;