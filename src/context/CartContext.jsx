import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    // Busca si el producto ya está en el carrito
    const existingItem = cart.find(prod => prod.item.id === item.id);

    if (existingItem) {
      // Si existe, actualiza la cantidad de forma inmutable
      setCart(
        cart.map(prod =>
          prod.item.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        )
      );
    } else {
      // Si no existe, agrega el nuevo producto de forma inmutable
      setCart([...cart, { item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    // La lógica de removeItem también debe ser inmutable
    const existingItem = cart.find(prod => prod.item.id === itemId);

    if (existingItem && existingItem.quantity > 1) {
      setCart(
        cart.map(prod =>
          prod.item.id === itemId
            ? { ...prod, quantity: prod.quantity - 1 }
            : prod
        )
      );
    } else {
      setCart(cart.filter(prod => prod.item.id !== itemId));
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some(prod => prod.item.id === itemId);
  };

  const totalItems = cart.reduce((total, prod) => total + prod.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};