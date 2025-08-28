import React, { useContext } from 'react';
import { CartContext } from '../context/CardContext';

const Carrito = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="carrito">
      <h2>Carrito</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.nombre} - ${item.precio.toLocaleString()}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Carrito;
