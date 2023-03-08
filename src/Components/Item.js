import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({item}) {
    return (
        <div>
            <li className='itemCard'>
                        <img className='img' src={item.picture} alt={item.title}/>
                        <h3 className='nombreDeProducto'> {item.title} </h3>
                        <Link to={`/detalle/${item.id}`}>Ir al detalle</Link>
                    </li>
        </div>
    )
}
