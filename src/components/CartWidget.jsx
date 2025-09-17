import React from 'react';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img
        src="/assets/img/carticon.png" 
        alt="Carrito"
        style={{ width: '30px', height: '30px' }}
      />
      <span className="cart-count">0</span> {}
    </div>
  );
};

export default CartWidget;
