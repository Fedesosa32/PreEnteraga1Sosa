import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ItemDetail({item}) {
    return (
        <Card style={{ width: '30rem', height:'30rem' }}>
        <Card.Img variant="top" src= {`${item.picture}`}/>
        <Card.Body>
            <Card.Title>{`${item.title}`}</Card.Title>
            <Card.Text>
            {`${item.description}`}
            </Card.Text>
            <Button variant="primary">Agregar al Carrito</Button>
        </Card.Body>
        </Card>
    );
}

export default ItemDetail;