import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css';

export default function Item({item}) {
    return (
        <div>
            <li className='itemCard'>
                        <img className='img' src={item.picture} alt={item.title}/>
                        <h3 className='nombreDeProducto'> {item.title} </h3>
                        <Link to={`/detalle/${item.id}`}>
                            <button>Ir al detalle</button>
                        </Link>
                    </li>
        </div>
    )
}
