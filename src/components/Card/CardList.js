import * as React from 'react';
import Item from './Card';
import { Grid } from '@mui/material';
import '../Card/CardList.css'


const CardList=()=>{
    const productos = [
        {
            imagen: 'imagen',
            producto: 'producto',
            precio: 1600,
        
        },
        
    ]
    return(
        <>
        <h2>Mas Vendidos</h2>
        <Grid container  alignItems="center" justifyContent="center">
            <Grid item md={3}>
                <Item imagen={"/img/nafta.jpg"} producto={"Filtro de nafta"} precio={2500} />
            </Grid>
            <Grid item md={3}>
                <Item imagen={"/img/aire.jpg"} producto={"Filtro de aire"} precio={900} />
            </Grid>
            <Grid item md={3}>
                <Item imagen={"/img/aceite.jpg"} producto={"Filtro de aceite"} precio={3500} />
            </Grid>
            
        </Grid>
        </>
    )
}

 export default CardList

