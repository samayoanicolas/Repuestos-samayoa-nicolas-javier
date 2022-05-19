import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import '../NavBar/NavBar.css'
import Cart from '../Cart/Cart';



const NavBar = () =>{
    return( 
     <AppBar position="static">
        <Toolbar>
        <ul id="listNav">
            <li class="listButton" ><Button color="inherit" variant='text'>Inicio</Button></li>
            <li class="listButton" ><Button color="inherit" variant='text'>Tienda</Button></li>
            <li class="listButton" ><Button color="inherit" variant='text'>Contacto</Button></li>        
        </ul>
        <Cart/>
        </Toolbar>
      </AppBar>
      
   
    )
}

export default NavBar