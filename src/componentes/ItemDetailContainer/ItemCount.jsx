import React, { useState } from 'react';

const ItemCount = ({ initial, onAdd, stock }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
      onAdd(count + 1); // Llama a la función onAdd con el nuevo valor
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
      onAdd(count - 1); // Llama a la función onAdd con el nuevo valor
    }
  };

  return (
    <div className="d-flex align-items-center mb-3">
      <button className="btn btn-outline-secondary" onClick={decrement}>-</button>
      <span className="mx-3">{count}</span>
      <button className="btn btn-outline-secondary" onClick={increment}>+</button>
    </div>
  );
};

export default ItemCount;