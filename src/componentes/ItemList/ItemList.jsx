import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map((product) => (
        <div key={product.id} className="item-card">
          <h3>{product.name}</h3>
          <p>Precio: ${product.price}</p>
          {/* El enlace a la vista de detalle */}
          <Link to={`/item/${product.id}`}>Ver Detalle</Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;