import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function CheckOutForm({userData, setUserData}) {
function datosDeUsuario(evt){
    const value = evt.target.value;
    const input = evt.target.name;
    const newUserData = {...userData};
    newUserData[input] = value;
    setUserData (newUserData);
    
}
function borrarFormulario(){
    setUserData({
        name: "",
        lastName: "",
        email: "",
        phone: "",
    })
}
return (
    <div>
        <h4>Ingresá tus datos para finalizar la compra..</h4>
    
    <Form>
    <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control value={userData.name} name="name" type="text" onChange={datosDeUsuario} placeholder="Ingresá tu nombre" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupLastName">
        <Form.Label>Apellido</Form.Label>
        <Form.Control value={userData.lastName} name="lastName" type="text" onChange={datosDeUsuario} placeholder="Ingresá tu apellido" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control value={userData.email} name="email" type="email" onChange={datosDeUsuario} placeholder="Ingresá tu correo electrónico" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupPhone">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control value={userData.phone} name="phone" type="text" onChange={datosDeUsuario} placeholder="Teléfono" />
    </Form.Group>
</Form>
<br></br>
<Button style= {{margin: "15px"}} variant="secondary" onClick={borrarFormulario}>Limpiar Formulario</Button>
</div>
)
}

export default CheckOutForm