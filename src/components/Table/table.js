
import { Container, Button } from "@mui/material"
import { useContext } from "react"
import { Delete } from "@mui/icons-material"
import CartContext from "../Context/CardContext"
import '../Table/Table.css'
import { Link } from 'react-router-dom';




const Tabla = () => {

    
    const {cartListItems, totalPrice}= useContext(CartContext)
    console.log ("esto desde chek:", cartListItems)
    return(<>      
        <Container className='container-general'> 
        <h2 className='titulo' >Seleccionaste:</h2>
        <div className='cart-section'>
            <div className='col-cart-table__head'>
                <h2 className='tab'>Producto</h2>   
                <h2 className='tab'>Descripcion</h2>
                <h2 className='tab'>Precio Unitario</h2>
                <h2 className='tab'>Cantidad</h2>
            </div>
              {cartListItems.map((item)=>{
                const {imagen, producto, precio, id}=item
                return(<>
                    <div className='cart-table__content' key={id} >
                        <div className='cart-table__content-img cont'>
                            <img src={`${imagen}`} />
                        </div>
                        <div className='cart-table__content-title cont'>
                            <p>{producto} </p>
                        </div>
                        <div className='cart-table__content-price cont'>
                            <p>${precio}</p>
                        </div>
                        <div className='cart-table__content-quantity cont'>
                            <p>1</p>
                        </div>
                        <div className='cart-table__content-price cont'>
                            <button className='btn-delete'>
                                <Delete />
                            </button>
                        </div>
                    </div>
                    <hr></hr>
                    </>
                )
                
              })}
                     <div className='cart-footer'>
                     <Button color="success" ><Link to={'/'}> Continuar Compra </Link></Button> 
                         <div className='cart-checkout-details'>
                         <div className='cart-checkout__subtotal'>
                        <p>Subtotal</p>
                         <span>${totalPrice} </span>
                           </div>
                         <div className='cart-checkout__total'>
                        <p>Total</p>
                    <span>${totalPrice} </span>
                       </div>
                     <Button className='btn-custom'>Completar Compra</Button>
</div>
</div> 
            
         
        </div>
    </Container>    




</>)}

export default Tabla

