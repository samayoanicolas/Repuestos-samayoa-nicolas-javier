
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const EmptyCart = () => {
    return (
        <>
            <h1> Tu carrito está vacío. ¡Agregá productos!</h1>
            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button variant="contained" size="large" color="secondary">
                    Comprar
                </Button>
            </ Link>
        </>
    )
}

export default EmptyCart;