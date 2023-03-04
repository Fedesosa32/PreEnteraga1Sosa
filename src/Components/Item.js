import React from 'react'

export default function Item() {
    return (
        <div>
            <li className='itemCard' key={Item.id}>
                        <img src={Item.picture} alt={Item.title}/>
                        <h3>{'${Item.title}'}</h3>

                    </li>
        </div>
    )
}
