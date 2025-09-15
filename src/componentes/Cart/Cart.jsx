import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cart.css'; // Asegúrate de que este archivo exista

const Cart = () => {
  const { cart, addItem, removeItem, clearCart, totalItems } = useContext(CartContext);

  if (totalItems === 0) {
    return (
      <div className="container mt-5 text-center">
        <h2>Tu carrito está vacío</h2>
        <p>¡Explora nuestros productos para empezar a comprar!</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Mi Carrito</h2>
      <div className="list-group">
        {cart.map((prod) => (
          <div key={prod.item.id} className="list-group-item d-flex align-items-center">
            <img src={prod.item.image} alt={prod.item.name} className="img-thumbnail me-3" style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
            <div className="flex-grow-1">
              <h5 className="mb-1">{prod.item.name}</h5>
              <p className="mb-1">Precio: ${prod.item.price}</p>
              <p className="mb-0">Subtotal: ${prod.quantity * prod.item.price}</p>
            </div>
            <div className="d-flex align-items-center me-3">
              <button onClick={() => removeItem(prod.item.id)} className="btn btn-sm btn-outline-danger me-2">-</button>
              <span className="fw-bold">{prod.quantity}</span>
              <button onClick={() => addItem(prod.item, 1)} className="btn btn-sm btn-outline-success ms-2">+</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 d-flex justify-content-between align-items-center">
        <h4>Total: ${cart.reduce((total, prod) => total + prod.item.price * prod.quantity, 0)}</h4>
        <button onClick={clearCart} className="btn btn-warning">Vaciar Carrito</button>
      </div>
    </div>
  );
};

export default Cart;