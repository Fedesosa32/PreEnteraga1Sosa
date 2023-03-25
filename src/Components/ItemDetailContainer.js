import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../index.css';
import products from '../Products/Products';
import ItemDetail from './ItemDetail';

import { getFirestore, doc, getDoc, collection } from 'firebase/firestore';
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

async function detalleDeProducto(idItem){
    const coleccionDeProductos = collection(db, "products");
    const referenciaDoc = doc (coleccionDeProductos, idItem )
    const docSnapshot = await getDoc(referenciaDoc);
    return {...docSnapshot.data(), id: docSnapshot.id };
}

function ItemDetailContainer ({greeting}) {
const [item, setItem] = useState([]);

const {id} = useParams();

/*function detalleDeProducto (idItem){
    return new Promise((resolve, reject) => {
        setTimeout ( () => {
            let itemIndividual = products.find ((item)=> item.id === Number(idItem));
            if (itemIndividual !== undefined) resolve (itemIndividual);
            else reject ("Item No Encontrado");
        }, 2000);
    })
}*/


useEffect ( () => {

    detalleDeProducto(id).then((datos) => {
        setItem (datos);
    })
    .catch((error) => alert(error));
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