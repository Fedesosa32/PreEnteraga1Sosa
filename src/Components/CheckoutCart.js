import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { crearOrden } from '../services/firestore';
import CartContext from '../context/cartContext';


function CheckoutCart(cart, precioTotal) {
    const [ordenId, setOrdenId] = useState(null);

    async function finalizarCompra(){
        
            const orderData={
            comprador: {name: "Fede", phone: "351222222", email: "fede@fede.com"},
            items: cart,
            total: precioTotal,
            timestamp: new Date(),
        }
    const id = await crearOrden(orderData)
    setOrdenId (id);
    }
    return (
        <div>
        {
            ordenId ? 
            <h4>Gracias por tu compra!!</h4>
            :
            <Button variant="primary" onClick={finalizarCompra}>Finalizar Compra</Button>  
        }
        </div>
    )
}

export default CheckoutCart