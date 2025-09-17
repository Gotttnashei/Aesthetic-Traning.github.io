import React, { useState } from 'react';
import './main.css';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const sumar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  const restar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  const agregar = () => {
    if (onAdd) onAdd(cantidad);
    console.log(`Agregaste ${cantidad} unidades al carrito`);
  };

  return (
    <div className="item-count">
      <div className="contador-controles">
        <button onClick={restar}>−</button>
        <span>{cantidad}</span>
        <button onClick={sumar}>+</button>
      </div>
      <button className="btn-agregar" onClick={agregar}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
