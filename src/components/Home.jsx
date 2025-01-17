import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './Home.css';

const Home = () => {
  useEffect(() => {
    gsap.to('.book', {
      y: 'random(-20, 20)',
      x: 'random(-20, 20)',
      duration: 3,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <section className="menu-body">
      <div className="floating-books">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="book"></div>
        ))}
      </div>
      <div className="text-center py-5" style={{ position: 'relative', zIndex: 1 }}>
        <h1>Bienvenue au Gestionnaire de Bibliothèque</h1>
        <p className="lead">
          Gagnez du temps ! Gérez vos livres, vos auteurs, et vos emprunts facilement.
        </p>
        <Button as={Link} to="/listlivres" variant="primary" size="lg" className="mt-3">
          Commencer
        </Button>
      </div>
    </section>
  );
};

export default Home;
