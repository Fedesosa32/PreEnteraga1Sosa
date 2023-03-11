import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../index.css';
import products from '../Products/Products';
import ItemList from './ItemList';

function datosDeProductos (){
    return new Promise((resolve, reject) => {
        let error = false

        setTimeout ( () => {
            if (error === true) reject ("Error leyendo datos");
            resolve (products);
        }, 2000);
    })
}

function categoriaDeProductos (categoryUrl){
    return new Promise((resolve, reject) => {
        setTimeout ( ( ) => {
            let tipoDeProducto = products.filter((item) => item.category === categoryUrl);
            resolve (tipoDeProducto)
        }, 2000);
    });
}

function ItemListContainer ({greeting}) {
const [items, setItems] = useState([]);

const catDatos = useParams ();
const idCategory = catDatos.idCategory;

async function leerDatos() {
    if (idCategory === undefined) {
        let respuesta = await datosDeProductos();
        setItems(respuesta);
        } else {
        let respuesta = await categoriaDeProductos(idCategory);
        setItems(respuesta);
    }
    }

useEffect ( () => {

    let datosParciales = datosDeProductos ();
    datosParciales.then ((datosActualizados)=>{
        setItems(datosActualizados);
    });
    leerDatos();
},
[])


    return (
    <div className='divPrincipal'>
        <h1 className='tituloListado'>{greeting}</h1>    
        <ItemList items={items}/>
    </div>
    )
}

export default ItemListContainer