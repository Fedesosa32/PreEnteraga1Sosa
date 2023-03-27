import React from 'react'
import { BsFillCartCheckFill } from 'react-icons/bs';
import '../index.css';
import { useContext } from 'react';
import cartContext from '../context/cartContext';



const CartWidget = () => {
    const{cart} = useContext (cartContext);
    const cartCount = cart.length;

    return (
        <span className='carrito'>
        <BsFillCartCheckFill className="icono"/>
        <span className='bolsa'>{cartCount.length}</span>
        </span>
    );
}

export default CartWidget

