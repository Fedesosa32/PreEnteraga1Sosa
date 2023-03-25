import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css';
import Button from 'react-bootstrap/Button';

export default function Item({item}) {
    return (
        <div>
            <li className='itemCard'>
                        <img className='img' src={item.picture} alt={item.title}/>
                        <h3 className='nombreDeProducto'> {item.title} </h3>
                        {item.offer && (
                        <small style={{ color: "red" }}>Oferta: {item.offer} % </small>)}
                        <Link to={`/detalle/${item.id}`}>
                        <Button variant="primary">Detalle</Button>
                        </Link>
                    </li>
        </div>
    )
}
