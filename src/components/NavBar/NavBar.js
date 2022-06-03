import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import '../NavBar/NavBar.css'
import Cart from '../Cart/Cart';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';


const NavBar = () =>{
    return( 
     <AppBar position="static">
        <Toolbar>
        <ul id="listNav">
        
            <li class="listButton" ><Button color="inherit" variant='text'><Link to={'/'}><HomeIcon /></Link></Button></li>
            <li class="listButton" ><Button color="inherit" variant='text'>Inicio</Button></li>
            <li class="listButton" ><Button color="inherit" variant='text'><Link to={'/'}>Tienda</Link></Button></li>
            <li class="listButton" ><Button color="inherit" variant='text'><Link to={'/contacto'}>contacto</Link></Button></li>        
        </ul>
        <Cart/>
        </Toolbar>
      </AppBar>
      
   
    )
}

export default NavBar