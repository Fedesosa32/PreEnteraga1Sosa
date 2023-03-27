import { getFirestore, addDoc, collection } from 'firebase/firestore';
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

export async function crearOrden (orderData){
    const collectionRef = collection(db, "orders");
    console.log(orderData);  
    const response = await addDoc(collectionRef, orderData);
    console.log("Orden creada exitosamente!", response.id);  
    return response.id;

}