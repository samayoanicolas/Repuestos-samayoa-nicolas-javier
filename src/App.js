
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardList from './components/Card/CardList';
import NavBar from './components/NavBar/NavBar';
import Contacto from './pages/contacto';
import PaginaNoDisponible from './pages/paginaNoDisponible';
import Detalle from './pages/detalle';
import { CartProvider } from './components/Context/CardContext';
import Cart from './pages/cart';

  

function App() {
  return (
    
        <div className="App">
          <CartProvider>
          <BrowserRouter>
          <NavBar />
             <Routes>
             
                <Route exact path='/' element={<CardList/>}/>
                <Route exact path='/category/:id' element={<CardList/>}/>
                <Route exact path='/item/:id' element={<Detalle/>}/>
                <Route exact path='/contacto' element={<Contacto/>}/>
                <Route exact path='/cart' element={<Cart/>}/>

                <Route exact path='/*' element={<PaginaNoDisponible/>}/>
                   
             </Routes>
          </BrowserRouter>
          </CartProvider>
        </div>
    
  )
}

export default App;
