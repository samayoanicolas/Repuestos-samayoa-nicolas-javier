import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../Card/Card.css'
import CountItem from '../Count/ItemCount';


const Item = ({ imagen, producto, precio }) =>{
   


    return(
      <div className='card'>      
    <Card sx={{ maxWidth: 345 }}>
    
      <CardContent>
       <div>
            <img src={`./${imagen}`}/> 
        </div>
        <Typography gutterBottom variant="h5" component="div">
        {producto}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        ${precio}
        </Typography>
      </CardContent>
        <CountItem/>
      <CardActions>
         <div className='add'>     
        <Button color="success" >Agregar</Button>
        </div>
      </CardActions>
    </Card>
    </div>
  );
}


 export default Item