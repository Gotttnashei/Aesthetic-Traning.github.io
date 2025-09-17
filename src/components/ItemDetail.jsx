import React, { useContext } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';
import './main.css';

const ItemDetail = ({ producto }) => {
  const { addToCart } = useContext(CartContext);

  const handleAdd = (cantidad) => {
    addToCart(producto, cantidad);
  };

  if (!producto) return <p>Producto no disponible</p>;

  return (
    <div className="item-detail">
      <img src={producto.imagen} alt={producto.nombre} className="item-detail-img" />
      <div className="item-detail-info">
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <p className="item-detail-price">${producto.precio.toLocaleString()}</p>
        <ItemCount stock={producto.stock} onAdd={handleAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
