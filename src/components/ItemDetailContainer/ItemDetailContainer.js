import { useEffect, useState} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import productos  from "../../data/productsMocks"
import { useParams } from "react-router-dom";



const ItemDetailContainer = () =>{  
   const [prod, setProduct]= useState({});
   const {id} =useParams()
   
   
   // const getItem = () =>{
   //    return new Promise((resolve, reject)=>{
   //        setTimeout(()=>{
   //         resolve(productoSolo)
   //        },2000)
   //    })
   // }
   useEffect(()=>{
      // getItem()
      // .then((res)=>{
      //     setProduct(res)
      // })
      const productFilter = productos.find((product) => {
         return product.id === parseInt(id);
       });
       setProduct(productFilter);
   },{})
 

   return(
      <>
      <ItemDetail data={prod} />
      </>   
   )
};

export default ItemDetailContainer