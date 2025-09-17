import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import { CartContext } from '../context/CartContext';

const NavBar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">Aesthetic Training</Link>
        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/planes">Planes</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to="/sobremi">Sobre mí</Link></li>
        </ul>

        {/* Ícono del carrito con contador */}
        <div className="carrito-icono">
          🛒 <span className="contador">{cartItems.length}</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
