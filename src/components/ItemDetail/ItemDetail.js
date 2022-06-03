
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../Card/Card.css'

const ItemDetail = ({data}) => {

   console.log ("esto es data:", data)

    return(
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
        </CardContent>
      </Card>
      </div>
    )
}

export default ItemDetail