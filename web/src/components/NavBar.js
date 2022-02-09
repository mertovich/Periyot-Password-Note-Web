import React from 'react';
import { Navbar, Container } from 'react-bootstrap'
import Logo from '../images/Logo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return <div>
        <Navbar style={{
            marginTop: '1%',
            paddingLeft: '5%',
            paddingRight: '5%',
        }}>
            <Navbar.Brand href="#home"> <img src={Logo} height='50px' width='50px' alt='logo' /> </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-center">
                <Navbar.Text style={{
                    marginLeft: '2%',
                    marginRight: '2%',
                }} >
                    <Link style={{textDecoration:'none'}} to='/' ><b>Home</b></Link>
                </Navbar.Text>
                <Navbar.Text style={{
                    marginLeft: '2%',
                    marginRight: '2%',
                }} >
                    <Link style={{textDecoration:'none'}} to='/About'><b>About</b></Link>
                </Navbar.Text>
                <Navbar.Text style={{
                    marginLeft: '2%',
                    marginRight: '2%',
                }}>
                    <Link style={{textDecoration:'none'}} to='/Features'><b>Features</b></Link>
                </Navbar.Text>
                <Navbar.Text style={{
                    marginLeft: '2%',
                    marginRight: '2%',
                }}>
                    <a style={{textDecoration:'none'}} href='https://github.com/Periyot/Periyot-Password-Note'><b>GitHub</b></a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    </div>;
};

export default NavBar;
