import { useState } from "react";   

const ItemCount = ({initial, stock, onAdd}) => {
        const [count, setCount] = useState(0);
        
        const decrease = () => {
            if(count>initial){
            setCount(count -1 );
            }
            
        };
        
        const increase = () => {
            if(count<stock){
            setCount(count + 1);}

    };   return( <div>
    <button className='bot' onClick={decrease}>
    -
    </button>
    <span className='contador'> {count} </span>
    <button  className='bot' onClick={increase}>
    +
    </button>
    <button  className='bot'onClick={()=> onAdd(count) }>Agregar al carrito</button>
    </div>)
    }
    export default ItemCount
