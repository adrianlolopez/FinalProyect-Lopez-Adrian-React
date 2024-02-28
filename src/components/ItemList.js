import React from 'react';

const ItemList = ({ carros, onAddToCart }) => {
  return (
    <div className="item-list">
      <h3>Carros Disponibles:</h3>
      <ul>
        {carros.map(carro => (
          <li key={carro.id}>
            <h4>{carro.nombre}</h4>
            <p>Precio: $ {carro.precio}</p>
            <p>{carro.descripcion}</p>
            <img src={carro.imagenURL} alt={carro.nombre} style={{ width: '500px' }} />
            <button onClick={() => onAddToCart(carro)}>Agregar al carrito</button> {/* Botón "Agregar al carrito" */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
