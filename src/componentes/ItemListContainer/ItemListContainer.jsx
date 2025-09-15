import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

import mesadaGranito from '../../assets/img/mesada-granito-negro.jpg';
import mesadaMarmol from '../../assets/img/mesada-marmol-carrara.jpg';
import mesadaCuarzo from '../../assets/img/mesada-cuarzo-blanco.jpg';
import espejoBano from '../../assets/img/espejo-bano.jpg';
import toallero from '../../assets/img/toallero.jpg';

// Datos de productos con imágenes para los estilos
const allProducts = [
  { id: '1', name: 'Mesada de Granito Negro', category: 'mesadas', price: 250.00, image: mesadaGranito },
  { id: '2', name: 'Mesada de Mármol Carrara', category: 'mesadas', price: 400.00, image: mesadaMarmol },
  { id: '3', name: 'Mesada de Cuarzo Blanco', category: 'mesadas', price: 350.00, image: mesadaCuarzo },
  { id: '4', name: 'Espejo para Baño con Luz LED', category: 'accesorios', price: 95.00, image: espejoBano },
  { id: '5', name: 'Toallero de Acero Inoxidable', category: 'accesorios', price: 45.00, image: toallero },
];

const fetchProducts = (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (categoryId) {
        const filteredProducts = allProducts.filter(
          (product) => product.category === categoryId
        );
        resolve(filteredProducts);
      } else {
        resolve(allProducts);
      }
    }, 1500);
  });
};

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchProducts(categoryId)
      .then((data) => {
        setProducts(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return <div className="text-center mt-5"><h2>Cargando productos...</h2></div>;
  }

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;