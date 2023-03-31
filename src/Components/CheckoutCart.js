import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import { crearOrden } from '../services/firestore';
import cartContext from '../context/cartContext';
import CheckOutForm from './CheckOutForm';


function CheckoutCart(cart) {
    const [userData, setUserData] = useState({
        name: "",
        lastName: "",
        email: "",
        phone: "",
    
    })
    const [ordenId, setOrdenId] = useState(null);
    const {precioTotal} = useContext (cartContext);

    async function finalizarCompra(){        
            const orderData={
            comprador: userData,
            items: cart,
            total: precioTotal(),
            timestamp: new Date(),
            
        }

    const id = await crearOrden(orderData)
    setOrdenId (id);
    }
    return (
        <div>
            <CheckOutForm userData={userData} setUserData={setUserData}/>
        {
            ordenId ? 
            <h4 style={{marginTop:"10px", color:"blue", fontSize:"35px"}}>Gracias por tu Compra!!</h4>
            :
            <Button variant="success" onClick={finalizarCompra}>Finalizar Compra</Button>            
        }
        
        </div>
    )
}

export default CheckoutCart