import { useState } from "react";   
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


const ItemCount = ({initial, stock, onAdd}) => {
        const [count, setCount] = useState(initial);
        
        const decrease = () => {
            if(count > initial){
            setCount(count -1 );
            }
            
        };
        
        const increase = () => {
            if(count < stock){
            setCount(count + 1);}

    };   return( 
        <div>
            <Button variant="warning" onClick={decrease}> - </Button>
            
            <span className='contador'> {count} </span>
            <Button variant="warning" onClick={increase}> + </Button>
            <Link to="/cart">
                <Button variant="primary" onClick={()=> onAdd(count) }>Agregar al Carrito</Button>
            </Link>
        </div>)
        
    }
    export default ItemCount
