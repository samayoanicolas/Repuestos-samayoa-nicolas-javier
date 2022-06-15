import { useState, useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import CartContext from '../Context/CardContext'
import '../Cart/Cart.css'
import { Button } from '@mui/material';
import {Link} from '@mui/material';
const CartWidget = () =>  {
    const { cartListItems, removeItemFromCart } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <div className='cart-container-icon'>
            <ShoppingCartIcon color={'inherit'} aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}/>
            <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button'}}>
                <div className='container-item-list-cart'>
                    {cartListItems.length === 0 && (
                        <>
                            <p>No hay productos carrito</p>
                            
                        </>
                    )}
                    {cartListItems.map( (item) => {
                        return(
                        <div className='item-cart-prod' key={item.id}>
                            <div className='cart-prod__image'>
                                <img src={`${item.imagen}`} alt="asdasd" />
                            </div>
                            <div className='cart-prod__info'>
                                <p>{item.producto}</p>
                                <span>$ {item.precio}</span>
                            </div>
                            <div className='cart-prod__action'>
                                <button onClick={() => removeItemFromCart(item.id)}>
                                    <DeleteIcon />
                                </button>
                                <Button color="success" ><Link to={'/cart'}> ir al Carrito </Link></Button>
                            </div>
                        </div>
                        )
                    })}
                    
                </div>
            </Menu>
        </div>
    )
}

export default CartWidget