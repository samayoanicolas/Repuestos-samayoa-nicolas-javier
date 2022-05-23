import Button from '@mui/material/Button';
import { useState } from 'react';
import '../Count/ItemCount.css'


const CountItem=()=>{
    const [count, setCount] = useState(0)
    const stock = 7;
    
    
    
    
    const masUno = ()=>{
        setCount (count + 1 )
    }
    const menosUno=()=>{
        setCount(count - 1)
    }
    return(
      <div className='contador'>
        <Button variant="contained" color="error" onClick={menosUno} disabled= {count===0}>-</Button>
           <p className='numerador'>{count}</p>
        <Button variant="contained" color="primary" onClick={masUno} disabled= {count===stock}>+</Button>

      </div>

    )
}

export default CountItem