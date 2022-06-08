
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../Card/Card.css'
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CountItem from '../Count/ItemCount';
import { Link } from 'react-router-dom';

import { useState } from 'react';


const ItemDetail = ({data}) => {
  const [showButton, setShowButton] = useState(false)



    return(
      <>
      <div className='card'>      
      <Card sx={{ maxWidth: 345 }}>
      
        <CardContent>
         <div>
         <img src={data.imagen}/> 
          </div>
          <Typography gutterBottom variant="h5" component="div">
        {data.producto}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          ${data.precio}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Cantidad disponibles: {data.stock}
          </Typography>
           
          {!  showButton ?
          <CountItem
            setShowButton={setShowButton}
          />
           :
          <Button color="success" ><Link to={'/cart'}> Finalizar Compra </Link></Button> }
          
          
        

        </CardContent>
      </Card>
      </div>
      </>
    )
}

export default ItemDetail