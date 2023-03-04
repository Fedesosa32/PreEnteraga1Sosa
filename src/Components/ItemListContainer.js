import React, { useEffect, useState } from 'react'
import '../index.css';
import products from '../Products/Products';
import ItemList from './ItemList';

function datosDeProductos (){
    return new Promise((resolve, reject) => {
        setTimeout ( () => {
            resolve (products);
        }, 2000);
    })
}

function ItemListContainer ({greeting}) {
const [items, setItems] = useState([]);

useEffect ( () => {

    let datosParciales = datosDeProductos ();
    datosParciales.then ((datosActualizados)=>{
        setItems(datosActualizados);
    });
},
[])


    return (
    <div>
        <h1 className='tituloListado'>{greeting}</h1>    
        <ItemList items={items}/>
    </div>
    )
}

export default ItemListContainer