import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../index.css';
import products from '../Products/Products';
import ItemDetail from './ItemDetail';
import ItemCount from './ItemCount';
import { useContext } from 'react';
import cartContext from '../context/cartContext';



function ItemDetailContainer ({greeting}) {
const [item, setItem] = useState([]);

const {id} = useParams();

function detalleDeProducto (idItem){
    return new Promise((resolve, reject) => {
        setTimeout ( () => {
            let itemIndividual = products.find ((item)=> item.id === Number(idItem));
            resolve (itemIndividual);
        }, 2000);
    })
}


useEffect ( () => {

    detalleDeProducto(id).then((datos) => {
        setItem (datos);
    });
},
[id]);

    return (
    <div className='divPrincipal'>
        <h1 className='tituloListado'>{greeting}</h1>    
        <ItemDetail item={item}/>   
    </div>
    
    )
}

export default ItemDetailContainer