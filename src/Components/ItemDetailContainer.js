import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../index.css';
import products from '../Products/Products';
import ItemDetail from './ItemDetail';

function detalleDeProducto (idItem){
    return new Promise((resolve, reject) => {
        setTimeout ( () => {
            let itemIndividual = products.find ((item)=> item.id === Number(idItem));
            resolve (itemIndividual);
        }, 2000);
    })
}

function ItemDetailContainer ({greeting}) {
const [item, setItem] = useState([]);

const params = useParams();
const idItem = params.idItem;

useEffect ( () => {

    detalleDeProducto(idItem).then((datos) => {
        setItem (datos);
    });
},
[])


    return (
    <div className='divPrincipal'>
        <h1 className='tituloListado'>{greeting}</h1>    
        <ItemDetail item={item}/>
        

    </div>
    )
}

export default ItemDetailContainer