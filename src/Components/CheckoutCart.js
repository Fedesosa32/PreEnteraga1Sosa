import React from 'react'
import Button from 'react-bootstrap/Button';
import { crearOrden } from '../services/firestore';


function CheckoutCart(cart, total) {

    function finalizarCompra(){

        const orderData={
            comprador: {name: "Fede", phone: "351222222", email: "fede@fede.com"},
            items: cart,
            total: total,
            timestamp: new Date(),
        }
        crearOrden(orderData)
    }
    return (
        <div>
        <Button variant="primary" onClick={finalizarCompra}>Finalizar Compra</Button>  
        </div>
    )
}

export default CheckoutCart