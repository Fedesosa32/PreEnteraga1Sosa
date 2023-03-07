import React from 'react'

export default function Item({item}) {
    return (
        <div>
            <li className='itemCard'>
                        <img className='img' src={item.picture} alt={item.title}/>
                        <h3 className='nombreDeProducto'> {item.title} </h3>

                    </li>
        </div>
    )
}
