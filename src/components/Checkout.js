import React, { useState } from 'react';
import { firestore } from '../firebase';

const Checkout = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleApellidoChange = (event) => {
    setApellido(event.target.value);
  };

  const handleTelefonoChange = (event) => {
    setTelefono(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleConfirmEmailChange = (event) => {
    setConfirmEmail(event.target.value);
  };

const handleRealizarCompra = async () => {
  try {

    const nuevaOrden = {
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
      email: email,
    };


    await firestore.collection('ordenes').add(nuevaOrden);


    alert("¡Gracias por tu compra! Tu orden ha sido realizada con éxito.");


  } catch (error) {
    console.error("Error al realizar la compra:", error);

    alert("Ocurrió un error al realizar la compra. Por favor, inténtalo de nuevo más tarde.");
  }
};


  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="order-details">

      </div>
      {!orderPlaced && (
        <div className="customer-details">
          <h3>Detalles del Cliente</h3>
          <input type="text" placeholder="Nombre" value={nombre} onChange={handleNombreChange} />
          <input type="text" placeholder="Apellido" value={apellido} onChange={handleApellidoChange} />
          <input type="tel" placeholder="Teléfono" value={telefono} onChange={handleTelefonoChange} />
          <input type="email" placeholder="Correo Electrónico" value={email} onChange={handleEmailChange} />
          <input type="email" placeholder="Confirmar Correo Electrónico" value={confirmEmail} onChange={handleConfirmEmailChange} />
          <button onClick={handleRealizarCompra} disabled={nombre === '' || apellido === '' || telefono === '' || email === '' || email !== confirmEmail}>
            Realizar Compra
          </button>
        </div>
      )}
      {orderPlaced && (
        <div className="order-confirmation">
          <p>Su orden ha sido realizada con éxito. Su número de orden es: [Número de orden]</p>
        </div>
      )}
    </div>
  );
}

export default Checkout;
