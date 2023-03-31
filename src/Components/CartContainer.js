import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table';
import cartContext from '../context/cartContext';
import { Button } from 'react-bootstrap';
import CheckoutCart from './CheckoutCart';

function CartContainer() {
  const {cart, precioTotal, eliminarDelCarrito} = useContext (cartContext);

  return (
    <>
    <h3 style={{margin:"10px"}}>Carrito de Compras</h3>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Eliminar</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cart.map ((item) => ( 
        <tr key = {item.id}>
          <td>
            <img height={60} src={item.picture} alt={item.title}/>
          </td>
          <td>{item.title}</td>
          <td>{item.price}</td>
          <td>{item.count}</td>
          <td>
          <Button variant="danger" onClick={()=> eliminarDelCarrito (item)}>Eliminar</Button>
          </td>
          <td>$ </td>
        </tr>
      ))}  
      </tbody>
    </Table>
          <div>
            <h5>El precio total de tu compra es de $ {precioTotal()}</h5>
          </div>
          <CheckoutCart cart = {cart}/>
          
    </>
  )
}

export default CartContainer