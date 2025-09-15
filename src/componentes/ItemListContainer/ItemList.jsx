import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ products }) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      {products.map((product) => (
        <div className="col" key={product.id}>
          <div className="card h-100 shadow-sm">
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text text-muted">${product.price}</p>
              <Link to={`/item/${product.id}`} className="btn btn-primary mt-auto">
                Ver Detalle
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;