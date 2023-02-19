import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';


export const BarraNav = () => {
    return (
        <div>
            
            <Navbar bg="dark" variant="dark navbar-expand-sm ">
                <Container>
                <Navbar.Brand to="/"><img className='logo' src='./logo1.jpg'></img></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link className='link' to="./inicio">Inicio</Nav.Link>
                    <Nav.Link to="./conocenos">Conocenos</Nav.Link>
                    <Nav.Link to="./features">Productos</Nav.Link>
                    <Nav.Link to="./pricing">Contacto</Nav.Link>
                    
                </Nav>
                <CartWidget/>
                </Container>
                
            </Navbar>
            
        </div>
        );
}
