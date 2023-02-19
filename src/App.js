
import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import { BarraNav } from './Components/NavBar';



function App() {
  return (
    <div className="App">
      <BarraNav/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
