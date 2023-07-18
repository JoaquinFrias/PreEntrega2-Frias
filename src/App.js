import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting='Bienvenidos a nuestro negocio'/> }/>
        <Route path='/categoria/:categoriaId' element={ <ItemListContainer greeting='Bienvenidos a nuestro negocio'/> }/>
        <Route path='/detalle/:id' element={ <ItemDetailContainer/> }/>
      </Routes>      
  </BrowserRouter>
  );
}

export default App;
