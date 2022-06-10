import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const addProductToCart = (product) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!isInCart) {
            setTotalPrice(totalPrice + product.price)
            return setCartListItems(cartListItems => [...cartListItems, product])
        }
    }
    const removeItemFromCart = (itemId) => {
        const itemToRemove = cartListItems.find(item => item.id === itemId);
        let indexOfItem = cartListItems.indexOf(itemToRemove);
        cartListItems.splice((indexOfItem), 1)
        setCartListItems(cartListItems => [...cartListItems])
    }

    const data = {
        cartListItems,
        addProductToCart,
        totalPrice,
        removeItemFromCart 
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }