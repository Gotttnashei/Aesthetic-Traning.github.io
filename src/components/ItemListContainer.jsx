import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getProductos } from '../Data/Productos';

const ItemListContainer = () => {
  const { categoriaId } = useParams(); // Lee el parámetro dinámico de la URL (ej: /categoria/suplementos)
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos().then((data) => {
      if (categoriaId) {
        const filtrados = data.filter((prod) => prod.categoria === categoriaId);
        setProductos(filtrados);
      } else {
        setProductos(data);
      }
    });
  }, [categoriaId]);

  return (
    <section className="itemlist-section">
      <div className="container text-center">
        <h2 className="itemlist-title">
          {categoriaId ? `Categoría: ${categoriaId}` : 'Catálogo de Productos'}
        </h2>
        <ItemList productos={productos} />
      </div>
    </section>
  );
};

export default ItemListContainer;
