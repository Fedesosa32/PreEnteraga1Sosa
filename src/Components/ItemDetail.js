import React from 'react';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import { useContext } from 'react';
import cartContext from '../context/cartContext';


const { agregarItem } = useContext(cartContext);

function onAdd (count) {
    alert (`agregaste ${count} productos al carrito`);
    agregarItem (item, count);
}

function ItemDetail({item}) {
    return (
        <Card style={{ width: '30rem', height:'30rem' }}>
        <Card.Img variant="top" src= {item.picture}/>
        <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text> {item.description}</Card.Text>
            <p> Precio: ${item.price}</p>
            <ItemCount onAdd={onAdd} initial={1} stock={item.stock}/>
            
        </Card.Body>
        
        
        </Card>
        
    );
}

export default ItemDetail;