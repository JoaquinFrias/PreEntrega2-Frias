import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';




function App() {
  return (
    <CartProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting='Bienvenidos a nuestro negocio'/> }/>
        <Route path='/categoria/:categoriaId' element={ <ItemListContainer greeting='Bienvenidos a nuestro negocio'/> }/>
        <Route path='/detalle/:id' element={ <ItemDetailContainer/> }/>
        <Route path='/cart' element={ <Cart/> }/>
      </Routes>      
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
