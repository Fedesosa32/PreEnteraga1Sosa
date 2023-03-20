
import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import { NavBar } from './Components/NavBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { CartContextProvider } from './context/cartContext';

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

function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
      <NavBar/> 
          <Routes>
              <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a Beebus!"}/>} />
              <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
              <Route path='/category/:idCategory' element={<ItemListContainer greeting={"Bienvenidos a Beebus!"}/>} />
          </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}


export default App;
