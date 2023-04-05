import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import {AiFillContacts, AiFillHome} from "react-icons/ai"
import headerLogo from "../../../assets/img/product/2.png"
import "./menubar.scss"

const Menubar = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container className='menubar-navbar justify-content-between fixed-top '>
      <div className='navbar-logo'>
      <Navbar.Brand href="#home"> <img src={headerLogo} className='img-fluid' alt="zirve prefabrik logo" /> </Navbar.Brand>
      <Navbar.Toggle className='toggle' aria-controls="basic-navbar-nav" />
      </div>
      <div className='navbar-link'>
      <Navbar.Collapse id="basic-navbar-nav  justify-content-end">
        <Nav className="me-auto links">
          <Nav.Link href="#home"><AiFillHome/> Ana Sayfa</Nav.Link>
          <Nav.Link href="#about">Hakkımızda</Nav.Link>
          <Nav.Link href="#contact"><AiFillContacts/> İletişim</Nav.Link>
          <Nav.Link href="#product">Ürünler</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </div>
    </Container>
  </Navbar>
  )
}

export default Menubar
