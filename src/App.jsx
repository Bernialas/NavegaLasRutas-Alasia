import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import NotFound from './componentes/NotFound/NotFound';
import Cart from './componentes/Cart/Cart'; // Importa el nuevo componente

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a Emma mesadas!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="¡Explora nuestros productos!" />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} /> {/* Nueva ruta para el carrito */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;