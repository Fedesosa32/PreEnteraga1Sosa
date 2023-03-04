import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { NavLink, Link } from 'react-router-dom';


export const NavBar = () => {
    return (
        <div>
            
            <Navbar bg="dark" variant="dark navbar-expand-sm ">
                <Container>
                <Navbar.Brand Link to="/"><img className='logo' src='./logo1.jpg' alt='Logo Sitio'></img></Navbar.Brand>
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
