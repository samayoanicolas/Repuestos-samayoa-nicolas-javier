import { useEffect, useState} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { productoSolo } from "../../data/productsMocks"



const ItemDetailContainer = () =>{  
   const [prod, setProd]= useState({}) 
   const getItem = () =>{
      return new Promise((resolve, reject)=>{
          setTimeout(()=>{
           resolve(productoSolo)
          },2000)
      })
   }
   useEffect(()=>{
      getItem()
      .then((res)=>{
          setProd(res)
      })
   },[])
 

   return(
      <>
      <div>Contenedor Item</div>
      <ItemDetail info={prod} />
      </>   
   )
}

export default ItemDetailContainer