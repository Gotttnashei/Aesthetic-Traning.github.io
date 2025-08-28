import React from 'react';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img
        src="/assets/img/carticon.png" // asegurate de tener esta imagen en /public/assets/img/
        alt="Carrito"
        style={{ width: '30px', height: '30px' }}
      />
      <span className="cart-count">0</span> {/* podés conectar esto con lógica más adelante */}
    </div>
  );
};

export default CartWidget;
