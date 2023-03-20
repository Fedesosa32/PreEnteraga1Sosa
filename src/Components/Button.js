import React from 'react'
import './index.css';
import Button from 'react-bootstrap/Button';

function Button() {
    return (
        <Button variant="primary" onClick ={props.onClick}>Agregar al Carrito</Button>
    );
}

export default Button