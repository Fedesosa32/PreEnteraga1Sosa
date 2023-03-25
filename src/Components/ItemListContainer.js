import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../index.css';
import products from '../Products/Products';
import ItemList from './ItemList';
import Loader from './Loader';
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyAiF4ARD9QAomTQkKjEZRPSgyAZEk7NNHE",
    authDomain: "beebus-602ef.firebaseapp.com",
    projectId: "beebus-602ef",
    storageBucket: "beebus-602ef.appspot.com",
    messagingSenderId: "296074327845",
    appId: "1:296074327845:web:890ca2c03802524458cccc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore (app);

async function datosDeProductos(){
    const coleccionDeProductos = collection(db, "products");
    let snapshotProducts = await getDocs(coleccionDeProductos);
    const documents = snapshotProducts.docs;

    const dataProd = documents.map ((doc)=>{
        const producto = doc.data();
        producto.id = doc.id;
        return producto;
    });
    return dataProd;


}
/*function datosDeProductos (){
    return new Promise((resolve, reject) => {
        let error = false

        setTimeout ( () => {
            if (error === true) reject ("Error leyendo datos");
            resolve (products);
        }, 2000);
    })
}*/

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
const [isLoading, setIsLoading] = useState(true);

const catDatos = useParams ();
const idCategory = catDatos.idCategory;

async function leerDatos() {
    if (idCategory === undefined) {
        let respuesta = await datosDeProductos();
        setItems(respuesta);
        setIsLoading(false);
        } else {
        let respuesta = await categoriaDeProductos(idCategory);
        setItems(respuesta);
        setIsLoading(false);
    }
    }

useEffect ( () => {

    let datosParciales = datosDeProductos ();
    datosParciales.then ((datosActualizados)=>{
        setItems(datosActualizados);
    });
    leerDatos();
},
[idCategory])


    return (
    <div className='divPrincipal'>
        <h1 className='tituloListado'>{greeting}</h1>    
        {isLoading? <Loader/> : <ItemList items={items}/>}
    </div>
    )
}

export default ItemListContainer