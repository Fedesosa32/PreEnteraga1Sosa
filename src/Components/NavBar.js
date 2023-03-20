import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


export const NavBar = () => {
    return (
        <div>
            <Link to={"/"}>
                <Navbar bg="dark" variant="dark navbar-expand-sm ">
                    <Container>                        
                        <Navbar.Brand ><img className='logo' src='./logo1.jpg' alt='Logo Sitio'></img></Navbar.Brand>
                            <Nav className="me-auto">
                                <Link className='link' to="/">Inicio</Link>
                                <Link className='link' to="/category/maceta">Maceta</Link>
                                <Link className='link' to="/category/velas">Velas</Link>
                                
                            </Nav>
                        <CartWidget/>
                    
                    </Container>
                    
                </Navbar>
            </Link>
        </div>
        );
}
