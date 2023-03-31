import React from 'react'
import { BsFillCartCheckFill } from 'react-icons/bs';
import '../index.css';
import { useContext } from 'react';
import cartContext from '../context/cartContext';



const CartWidget = () => {
    const{numeroEnCarrito} = useContext (cartContext);    

    return (
        <span className='carrito'>
        <BsFillCartCheckFill className="icono"/>
        <span className='bolsa'>{numeroEnCarrito()}</span>
        </span>
    );
}

export default CartWidget

