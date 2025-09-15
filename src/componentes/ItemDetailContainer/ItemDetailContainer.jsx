import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

import mesadaGranito from '../../assets/img/mesada-granito-negro.jpg';
import mesadaMarmol from '../../assets/img/mesada-marmol-carrara.jpg';
import mesadaCuarzo from '../../assets/img/mesada-cuarzo-blanco.jpg';
import espejoBano from '../../assets/img/espejo-bano.jpg';
import toallero from '../../assets/img/toallero.jpg';

// Datos de productos con imágenes para los estilos
const allProducts = [
  { id: '1', name: 'Mesada de Granito Negro', description: 'Mesada resistente a golpes y rayones. Ideal para cocinas y baños de alto tránsito.', price: 250.00, image: mesadaGranito },
  { id: '2', name: 'Mesada de Mármol Carrara', description: 'Elegante y atemporal, con vetas naturales que le dan un toque de lujo a tu baño.', price: 400.00, image: mesadaMarmol },
  { id: '3', name: 'Mesada de Cuarzo Blanco', description: 'Superficie no porosa y fácil de limpiar. Un material duradero y estético.', price: 350.00, image: mesadaCuarzo },
  { id: '4', name: 'Espejo para Baño con Luz LED', description: 'Espejo de alta calidad con iluminación LED integrada para un estilo moderno.', price: 95.00, image: espejoBano },
  { id: '5', name: 'Toallero de Acero Inoxidable', description: 'Accesorio duradero y resistente a la humedad. Diseño minimalista.', price: 45.00, image: toallero },
];

const fetchProductById = (itemId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundProduct = allProducts.find((p) => p.id === itemId);
      if (foundProduct) {
        resolve(foundProduct);
      } else {
        reject(new Error('Producto no encontrado'));
      }
    }, 1500);
  });
};

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchProductById(itemId)
      .then((data) => {
        setItem(data);
      })
      .catch((error) => {
        console.error(error);
        setItem(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return <div className="text-center mt-5"><h2>Cargando detalles...</h2></div>;
  }

  if (!item) {
    return <div className="text-center mt-5"><h2>Producto no encontrado</h2></div>;
  }

  return (
    <div className="container my-5">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;