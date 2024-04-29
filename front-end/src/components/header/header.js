// header.js

import React from 'react';
import './header.css'; // Importa el archivo de estilos CSS del encabezado

function Header() {
  return (
    <header className="header">
      <h1>Cuentas claras</h1>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/acerca">Acerca de</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
