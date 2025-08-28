import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

const Home = () => {
  return (
    <>
      <main>
        {/* Sección Hero */}
        <section className="hero">
          <h2 className="hero-title">AESTHETIC</h2>
        </section>

        <section className="cta-section">
  <div className="cta-content">
    <h2 className="cta-title">
      Transforma tu físico con entrenamiento personalizado
    </h2>
    <p className="cta-text">
      ¡Obtén resultados reales en semanas! Descubrí tu mejor versión con nuestros planes diseñados para vos.
    </p>
    <Link to="/planes" className="btn-cta">
      Ver Plan
    </Link>
  </div>
</section>
       
     
      </main>
      

      {/* Pie de Página */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Aesthetic Training — Todos los derechos reservados.</p>
          <p>Diseñado por Máximo Bazzano</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
