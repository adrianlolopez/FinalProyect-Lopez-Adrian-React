import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const snapshot = await firestore.collection('carros').get();
        const productosData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProductos(productosData);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    fetchProductos();
  }, []);

  const handleAddToCart = async (carro) => {
    try {
      const carroRef = firestore.collection('carros').doc(carro.id);
      await carroRef.update({
        cantidadEnCarrito: carro.cantidadEnCarrito + 1 // Incrementar la cantidad en 1
      });
      console.log("Producto agregado al carrito:", carro.nombre);
    } catch (error) {
      console.error("Error al agregar producto al carrito:", error);
    }
  };

  return (
    <div>
      <h2>Productos</h2>
      <ItemList carros={productos} onAddToCart={handleAddToCart} /> {/* Pasar la función handleAddToCart al componente ItemList */}
    </div>
  );
};

export default ItemListContainer;
