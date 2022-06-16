import Button from '@mui/material/Button';
import { useState } from 'react';
import '../Count/ItemCount.css'
import { useContext } from 'react';
import CartContext from '../Context/CardContext';


const CountItem=({setShowButton, imagen, producto, precio, id })=>{
  const {addProductToCart} = useContext(CartContext)
    const [count, setCount] = useState(0)
    const stock = 7;
    
     function carry(){
      setShowButton(true);
      addProductToCart({ imagen, producto, precio, id })
    }
    
    
    const masUno = ()=>{
        setCount (count + 1 )
    }
    const menosUno=()=>{
        setCount(count - 1)
    }
    return(
      <>
      <div className='contador'>
        <Button variant="contained" color="error" onClick={menosUno} disabled= {count===0}>-</Button>
           <p className='numerador'>{count}</p>
        <Button variant="contained" color="primary" onClick={masUno} disabled= {count===stock}>+</Button>

      </div>
      <Button color="success" onClick={(carry)} >ADD</Button>
      
     </>
    )
}
  
export default CountItem