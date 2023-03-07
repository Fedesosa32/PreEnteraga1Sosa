import React from 'react'
import Item from './Item'

export default function ItemList({items}) {
    return (
    <div className='contenedorItemList'>
        <ul className='itemList'>
            {items.map ((item)=>(
                <Item item = {item} key={item.id}/>

            ))   }

        </ul>

    </div>
    )
}
