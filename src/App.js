
import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import { NavBar } from './Components/NavBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemList from './Components/ItemList';



function App() {
  return (
    <div className="App">
    <NavBar/>

    <BrowserRouter>   
      
      <ItemListContainer greeting={"Bienvenidos a Beebus!"}/>
    
    </BrowserRouter>
    </div>
  );
}


export default App;
