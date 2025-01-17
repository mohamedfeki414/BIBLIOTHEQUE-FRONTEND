import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Particles from 'react-tsparticles';

const Home = () => {
  return (
    <section className="menu-body" style={{ position: 'relative', minHeight: '100vh' }}>
      <Particles
        options={{
          background: { color: { value: '#000' } },
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { enable: true, speed: 3 },
          },
        }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
      <div className="text-center py-5" style={{ position: 'relative', zIndex: 1 }}>
        <h1>Bienvenue à la Bibliothèque</h1>
        <p className="lead">
          Explorez une vaste collection de livres, rencontrez des auteurs fascinants et découvrez de nouvelles spécialités.
        </p>
        <Button as={Link} to="/listlivres" variant="primary" size="lg" className="mt-3">
          Explorer maintenant
        </Button>
      </div>
    </section>
  );
};

export default Home;
