import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
import { getProductoPorId } from '../Data/Productos.js';
import './main.css'; 

const ItemDetailContainer = () => {
  const { productoId } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getProductoPorId(String(productoId)).then((data) => {
      if (data) {
        setProducto(data);
      } else {
        console.warn('Producto no encontrado');
      }
    });
  }, [productoId]);

  return (
    <div className="item-detail-container">
      {producto === null ? (
        <p>Producto no encontrado</p>
      ) : producto ? (
        <ItemDetail producto={producto} />
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
