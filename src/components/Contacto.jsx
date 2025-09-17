import React from 'react';
import './main.css';

const Contacto = () => {
  return (
    <>
      <section className="contact-section">
        <div className="contact-wrapper">
          {/* Información de contacto */}
          <div className="contact-card">
            <h2 className="contact-title">Contacto</h2>
            <div className="contact-info">
              <p><strong>Teléfono:</strong> +54 351 276 9575</p>
              <p><strong>Email:</strong>bazzanomaximo@gmail.com</p>
              <p><strong>Instagram:</strong> @bazzano.maximo </p>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="contact-card">
            <h2 className="contact-title">Redes Sociales</h2>
            <div className="redes-container">
              <div className="redes-item">
                <img src="/assets/img/Instagram.png" alt="Instagram" />
                <p>bazzano.maximo</p>
              </div>
              <div className="redes-item">
                <img src="/assets/img/x.png" alt="X" />
                <p>bazzano.maximo</p>
              </div>
              <div className="redes-item">
                <img src="/assets/img/youtube.png" alt="YouTube" />
                <p>bazzano.maximo</p>
              </div>
              <div className="redes-item">
                <img src="/assets/img/twitch.jpg" alt="Twitch" />
                <p>bazzano.maximo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pie de Página */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Aesthetic Training — Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
};

export default Contacto;
