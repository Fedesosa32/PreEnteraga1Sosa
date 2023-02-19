import React from 'react'
import { BsFillCartCheckFill } from 'react-icons/bs';
import '../index.css';


const CartWidget = () => {
    return (
        <a href='#' className='carrito'>
        <BsFillCartCheckFill className="icono"/>
        <span className='bolsa'>4</span>
        </a>
    );
}

export default CartWidget

