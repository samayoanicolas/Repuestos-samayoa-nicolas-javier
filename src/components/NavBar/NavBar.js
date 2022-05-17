import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';


const NavBar = () =>{
    return( 
     <AppBar position="static">
        <Toolbar>
        <ul>
            <li><button>Inicio</button></li>
            <li><button>Producto</button></li>
            <li><button>Contacto</button></li>
            
        </ul>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    

    )
}

export default NavBar