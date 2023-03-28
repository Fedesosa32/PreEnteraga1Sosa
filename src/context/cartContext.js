import { createContext, useState} from "react";


const cartContext = createContext ({
    cart: []
})

function CartContextProvider (props) {

    const [cart, setCart] = useState ([]);

    function agregarItem (item, count){
        
        const nuevoCarrito = JSON.parse(JSON.stringify(cart));
        if (estaEnElCarrito(item.id)) {
            let index = cart.findIndex((itemEnCarrito) => itemEnCarrito.id === item.id);
            nuevoCarrito[index].count = nuevoCarrito[index].count + count;
            } else {
            nuevoCarrito.push({ ...item, count });
            }
            setCart(nuevoCarrito);
            console.log(nuevoCarrito)
    
    }

    function estaEnElCarrito(id) {
        return cart.some((item) => item.id === id);
    }
    
    const eliminarDelCarrito = (item) => {
        const nuevoCart = cart.filter((product) => product !== item);
        setCart(nuevoCart);
    };

    function numeroEnCarrito(){
        let total = 0;
        cart.forEach( (item) => total += item.count);
        return total;
    }

    function precioTotal(){
        let total = 0;
        cart.forEach( (item) => total += (item.count * item.price));
        return total;
        
    }
    
    return(
        <cartContext.Provider value={{cart, agregarItem, eliminarDelCarrito, estaEnElCarrito, numeroEnCarrito, precioTotal}}>
            {props.children}
        </cartContext.Provider>
    )
}

export {CartContextProvider};
export default cartContext;

