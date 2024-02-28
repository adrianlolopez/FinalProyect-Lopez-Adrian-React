import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li>
          <span>Categorías:</span>
          <ul>
            <li><Link to="/categories/suv">SUV</Link></li>
            <li><Link to="/categories/sedan">Sedán</Link></li>
            <li><Link to="/categories/deportivo">Deportivo</Link></li>
          </ul>
        </li>
        <li><Link to="/cart">Carrito</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
