import * as React from 'react';
import { useState, useEffect } from 'react';   
import Item from './Card';
import { Grid } from '@mui/material';
import '../Card/CardList.css'
import productos from '../../data/productsMocks.js';
import { collection, doc, getDocs } from 'firebase/firestore';
import db from '../../data/firebaseConfig';

const CardList=()=>{
    const [products, setProducts]= useState([])   
   



   useEffect(()=>{
      getProducts().then((productos)=>{
        console.log("ppp", productos)
        setProducts(productos)

      })
     
   },[])
   const getProducts = async()=>{
    const productSnapshot = await getDocs(collection(db,"productos"));
    const productList= productSnapshot.docs.map((doc)=>{
        let product=doc.data
        product.id=doc.id

      return product

    })


  }
        return(
        <>
        <h2>Mas Vendidos</h2>
       
        <Grid container  alignItems="center" justifyContent="center">
        {
          products.map((productos) =>{
              return(
                <Grid item md={3}>
                     <Item imagen={productos.imagen} producto={productos.producto} precio={productos.precio} id={productos.id} />
                </Grid>
              )
              
              
          })
        }   
        </Grid>
        </>
    )
}

 export default CardList


