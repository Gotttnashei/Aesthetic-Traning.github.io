import React from 'react';
import './main.css';

const SobreMi = () => {
  return (
    <>
      <section className="sobremi-section">
        <div className="sobremi-content">
          <h2 className="sobremi-title">Sobre Mí</h2>
          <p className="sobremi-text">
            Soy Máximo Bazzano, creador de Aesthetic Training. Este proyecto nace de una pasión profunda por el entrenamiento físico, la disciplina y el desarrollo personal. Mi objetivo es ayudarte a transformar tu cuerpo y tu mentalidad, sin fórmulas mágicas, solo con constancia y compromiso.
          </p>
          <p className="sobremi-text">
            Cada plan que ofrezco está diseñado con dedicación, basado en experiencia real y adaptado a tus objetivos. Porque entrenar no es solo cambiar tu físico, es construir tu mejor versión.
          </p>
          <p className="sobremi-quote">“El único límite que existe es el que vos te imponés. Entrená para romperlo.”</p>
          <a href="/contacto" className="btn-sobremi">Conectá conmigo</a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Aesthetic Training — Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
};

export default SobreMi;
