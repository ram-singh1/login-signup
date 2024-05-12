'use client'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';

const Header = () => {
    return (
        <Navbar data-bs-theme='dark' expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand >
                    <Link href="/" className='nav-link'>Flex2</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link href="/about" className='nav-link'>About</Link>
                        <Link href="/service" className='nav-link'>Services</Link>
                        <Link href="/blog" className='nav-link'>Blog</Link>
                        <Link href="contact" className='nav-link'>Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header