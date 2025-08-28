import React from 'react';
import './main.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <section className="itemlist-section">
      <div className="container text-center">
        <h2 className="itemlist-title">{greeting}</h2>
        <p className="itemlist-text">
          
        </p>
      </div>
    </section>
  );
};

export default ItemListContainer;
