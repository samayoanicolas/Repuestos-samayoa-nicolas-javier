
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CardList from './components/Card/CardList';
import NavBar from './components/NavBar/NavBar';
import Contacto from './pages/contacto';
import PaginaNoDisponible from './pages/paginaNoDisponible';
import Detalle from './pages/detalle';

  

function App() {
  return (
    
        <div className="App">
          
          <BrowserRouter>
          <NavBar />
             <Routes>
             
                <Route exact path='/' element={<CardList/>}/>
                <Route exact path='/category/:id' element={<CardList/>}/>
                <Route exact path='/item/:id' element={<Detalle/>}/>
                <Route exact path='/contacto' element={<Contacto/>}/>
                <Route exact path='/*' element={<PaginaNoDisponible/>}/>
                   
             </Routes>
          </BrowserRouter>
        </div>
    
  )
}

export default App;
