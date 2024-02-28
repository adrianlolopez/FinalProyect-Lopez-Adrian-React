import React from 'react';

const ItemDetail = ({ carro }) => {
  return (
    <div className="item-detail">
      <h2>{carro.nombre}</h2>
      <img src={carro.imagenURL} alt={carro.nombre} width="500" />
      <p><strong>Descripción:</strong> {carro.descripcion}</p>
      <p><strong>Precio:</strong> ${carro.precio}</p>
      {/* Otros detalles del carro aquí, como marca, modelo, etc. */}
    </div>
  );
}

export default ItemDetail;
