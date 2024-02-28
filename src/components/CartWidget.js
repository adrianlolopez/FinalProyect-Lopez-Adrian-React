import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = ({ cantidad }) => {
  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span>{cantidad}</span>
    </div>
  );
}

export default CartWidget;
