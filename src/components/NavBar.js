import {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.png'
import navIcon3 from '../assets/img/nav-icon3.svg'


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
        
        return (
            <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className='navbar-toggle-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    <Nav.Link className='navbar-link'><Link className='shop' to='shop' >Shop</Link></Nav.Link>
                </Nav>
                <span className='navbar-text'>
                    <div className='social-icon'>
                        <a href='https://linkedin.com/in/marc-caixas-marin-254b1b2b4' target="blank"><img src={navIcon1} alt="linkedin"/></a>
                        <a href='https://github.com/marcaixs' target="blank"><img src={navIcon2} alt="github"/></a>
                        <a href='#'><img src={navIcon3} alt="instagram"/></a>
                    </div>
                    <Nav.Link href="#connect">
                        <button className="vvd"><span>Contact me!</span></button>
                    </Nav.Link>
                </span>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        );
        
            

}