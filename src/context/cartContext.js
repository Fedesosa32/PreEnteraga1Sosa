import { createContext, useState} from "react";


const cartContext = createContext ({
    cart: []
})

function CartContextProvider (props) {

    const [cart, setCart] = useState ([]);

    function agregarItem (item, count){
        const nuevoCarrito = [...cart]
        item.count = count;
        nuevoCarrito.push (item);
        setCart (nuevoCarrito)
    }

    function numeroEnCarrito(){
        let total = 0;
        cart.forEach( (item) => total + item.count);
        return total;
    }

    return(
        <cartContext.Provider value={{cart, agregarItem}}>
            {props.children}
        </cartContext.Provider>
    )
}

export {CartContextProvider};
export default cartContext;

