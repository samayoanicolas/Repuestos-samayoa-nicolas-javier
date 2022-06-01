
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../Card/Card.css'

const ItemDetail = ({info})=>{
    return(
      <div className='card'>      
      <Card sx={{ maxWidth: 345 }}>
      
        <CardContent>
         <div>
               <img src={`/${info.image}`}/>
          </div>
          <Typography gutterBottom variant="h5" component="div">
          {info.producto}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          ${info.precio}
          </Typography>
        </CardContent>
      </Card>
      </div>
    )
}

export default ItemDetail