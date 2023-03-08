
import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import { NavBar } from './Components/NavBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <NavBar/> 

          <Routes>
              <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a Beebus!"}/>} />
              <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
          </Routes>

      </BrowserRouter>
    </div>
  );
}


export default App;
