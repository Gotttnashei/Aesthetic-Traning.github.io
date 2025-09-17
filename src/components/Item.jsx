import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

const Item = ({ producto }) => {
  return (
    <div className="item-card">
      <img src={producto.imagen} alt={producto.nombre} className="item-img" />
      <h3 className="item-title">{producto.nombre}</h3>
      <p className="item-price">${producto.precio.toLocaleString()}</p>
      <Link to={`/producto/${producto.id}`} className="btn-ver">
        Ver detalle 
      </Link>
    </div>
  );
};

export default Item;
