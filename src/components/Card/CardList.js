import * as React from 'react';
import { useState, useEffect } from 'react';   
import Item from './Card';
import { Grid } from '@mui/material';
import '../Card/CardList.css'
import productos from '../../data/productsMocks.js';


const CardList=()=>{
    const [products, setProducts]= useState([])   
    const getProducts = () =>{
       return new Promise((resolve, reject)=>{
           setTimeout(()=>{
            resolve(productos)
           },2000)
       
       })
    }
   useEffect(()=>{
      getProducts()
      .then((res)=>{
             setProducts(res)

         })
      .catch((err)=>{
             
    
         })
   },[])
        return(
        <>
        <h2>Mas Vendidos</h2>
       
        <Grid container  alignItems="center" justifyContent="center">
        {
          products.map((productos) =>{
              return(
                <Grid item md={3}>
                     <Item imagen={productos.imagen} producto={productos.producto} precio={productos.precio} />
                </Grid>
              )
              
              
          })
        }   
        </Grid>
        </>
    )
}

 export default CardList


