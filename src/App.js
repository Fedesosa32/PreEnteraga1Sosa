
import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import { NavBar } from './Components/NavBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { CartContextProvider } from './context/cartContext';
import CartContainer from './Components/CartContainer';

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
              <Route path='/cart' element={<CartContainer/>}/>
          </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}


export default App;
