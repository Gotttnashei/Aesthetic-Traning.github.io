import React, { useContext } from 'react';
import './main.css';
import { CartContext } from '../context/CartContext'; 



const Planes = () => {
  const { addToCart } = useContext(CartContext);

  const planes = [
    {
      id: 1,
      nombre: 'Ganar Masa Muscular',
      precio: 73000,
      descripcion: 'Nuestros planes están diseñados para ayudarte a ganar masa muscular de forma efectiva.',
      imagen: '/assets/img/ganarmusculo.jpg.png',
    },
    {
      id: 2,
      nombre: 'Dieta Personalizada',
      precio: 24000,
      descripcion: 'Planes de alimentación personalizados de acuerdo a tus objetivos y necesidades.',
      imagen: '/assets/img/alimentacion.jpg.png',
    },
    {
      id: 3,
      nombre: 'Asesoría 1 a 1',
      precio: 98000,
      descripcion: 'Sesiones personalizadas con un entrenador experto para ayudarte a alcanzar tus metas.',
      imagen: '/assets/img/asesoria1a1.jpg.png',
    },
  ];

  return (
    <>
      <main>
        {/* Título principal */}
        <section className="planes-hero text-center">
          <h2 className="planes-title">Nuestros Planes de Entrenamiento</h2>
          <p className="planes-subtitle">
            Elige el plan que mejor se adapte a tu objetivo y comienza tu transformación.
          </p>
        </section>

        {/* Tarjetas de planes */}
        <section className="planes-container">
          {planes.map((plan) => (
            <div key={plan.id} className="plan-card">
              <img src={plan.imagen} alt={plan.nombre} className="plan-img" />
              <h3 className="plan-heading">{plan.nombre}</h3>
              <p className="plan-description">{plan.descripcion}</p>
              <p className="plan-discount">20% de descuento en tu primer mes</p>
              <p className="plan-price">${plan.precio.toLocaleString()}</p>
              <button className="btn-plan" onClick={() => addToCart(plan)}>
                Agregar al carrito
              </button>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Aesthetic Training — Todos los derechos reservados.</p>
          <p>Desarrollado por Máximo Bazzano</p>
        </div>
      </footer>
    </>
  );
};

export default Planes;
