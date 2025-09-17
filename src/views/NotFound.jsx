import React from 'react';
import '../components/main.css';

const NotFound = () => {
  return (
    <main className="not-found">
      <h2>Error 404</h2>
      <p>La página que estás buscando no existe.</p>
      <p>Verificá la URL o volvé al <a href="/">inicio</a>.</p>
    </main>
  );
};

export default NotFound;
