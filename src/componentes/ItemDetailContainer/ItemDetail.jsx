import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const [quantityToAdd, setQuantityToAdd] = useState(1);

  const handleAddToCart = () => {
    if (quantityToAdd > 0) {
      console.log('Agregando al carrito:', item.name, 'Cantidad:', quantityToAdd);
      addItem(item, quantityToAdd);
      alert(`${quantityToAdd} ${item.name} agregado/s al carrito`);
    }
  };

  return (
    <div className="card shadow-sm">
      <div className="row g-0">
        <div className="col-md-6">
          <img src={item.image} className="img-fluid rounded-start" alt={item.name} />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center p-4">
          <div className="card-body">
            <h1 className="card-title">{item.name}</h1>
            <p className="lead text-primary">${item.price}</p>
            <p className="card-text">{item.description}</p>
            <ItemCount initial={1} onAdd={setQuantityToAdd} stock={10} />
            <button 
              className="btn btn-primary mt-3"
              onClick={handleAddToCart}
            >
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;