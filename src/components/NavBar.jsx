import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../css/navbar.css';

// eslint-disable-next-line no-unused-vars
let IsFirst = true;

export default function NavBar() {

    useEffect(() => {
        const links = document.getElementsByClassName('nav-link');
        for (let i = 0; i < links.length; i++) 
        {
            if(window.location.href.endsWith(links[i].innerHTML))
            {
                links[i].classList.add('active');
            }

            links[i].addEventListener('click',()=>{
                for (let j = 0; j < links.length; j++) 
                {
                    links[j].classList.remove('active');
                }
                links[i].classList.add('active');
            })
        }

        document.getElementById('logo').addEventListener('click',()=>{
            for (let j = 0; j < links.length; j++) 
            {
                links[j].classList.remove('active');
            }
        })

    }, [])

    return (
        <Navbar className="navbar navbar-expand-lg navbar-dark p-0 fixed-top"  expand="lg">
            <div className='container-fluid'>
                <div id='bar' className='px-2 px-sm-5'>
                    <Link id='logo' to=''>start react</Link>
                    <Navbar.Toggle id='navBtn' aria-controls="basic-navbar-nav"> 
                        MENU <i className='fa fa-bars'></i>
                    </Navbar.Toggle>
                </div>
                <Navbar.Collapse className='justify-content-end d-lg-flex' id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='nav-link text-white' to='portfolio'>portfolio</Link>
                        <Link className='nav-link text-white' to='about'>about</Link>
                        <Link className='nav-link text-white' to='contact'>contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
