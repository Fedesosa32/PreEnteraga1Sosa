import React from 'react';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import { useContext } from 'react';
import cartContext from '../context/cartContext';
import Loader from './Loader';


function ItemDetail({item}) {
    const { agregarItem } = useContext(cartContext);

function onAdd (count) {
    alert (`agregaste ${count} productos al carrito`);
    agregarItem (item, count);
}
if (item.id === undefined) return <Loader/>

    return (
        <Card style={{ width: '25rem', height:'25rem', borderRadius:'15px'}}>
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