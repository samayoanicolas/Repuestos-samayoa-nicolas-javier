import * as React from 'react';
import { useState, useEffect } from 'react';   
import Item from './Card';
import { Grid } from '@mui/material';
import '../Card/CardList.css'


const CardList=()=>{
    const [products, setProducts]= useState([])
    const productos = [
        {   
            id:1,
            imagen : '/img/nafta.jpg',
            producto: 'Filtro de Nafta',
            precio: 2300,
            descripcion:'',
            stock : 15
        
        },
        {   
            id:2,
            imagen : '/img/aire.jpg',
            producto: 'Filtro de Aire',
            precio: 1600,
            descripcion:'',
            stock : 10
        
        },
        {   
            id:3,
            imagen : '/img/aceite.jpg',
            producto: 'Filtro de aceite',
            precio: 3600,
            descripcion:'',
            stock : 8
        
        },
    ]

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
             console.log("Fallo la llamada")
    
         })
   },[])
        return(
        <>
        <h2>Mas Vendidos</h2>
        {console.log("Statte:", products)}
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


