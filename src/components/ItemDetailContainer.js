import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [carro, setCarro] = useState(null);

  useEffect(() => {
    const fetchCarro = async () => {
      try {
        const carroRef = await firestore.collection('carros').doc(id).get();
        if (carroRef.exists) {
          const carroData = carroRef.data();
          setCarro({ id: carroRef.id, descripcion: carroData.descripcion, ...carroData });
        } else {
          console.log("No se encontró el carro");
        }
      } catch (error) {
        console.error("Error al obtener el carro:", error);
      }
    };

    fetchCarro();
  }, [id]);

  return (
    <div className="item-detail-container">
      {carro && <ItemDetail carro={carro} />}
    </div>
  );
}

export default ItemDetailContainer;
