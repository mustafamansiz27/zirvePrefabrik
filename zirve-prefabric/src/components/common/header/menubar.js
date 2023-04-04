import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import {AiFillContacts, AiFillHome} from "react-icons/ai"
import headerLogo from "../../../assets/img/product/header logo.jpg"
import "./menubar.scss"

const Menubar = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container className='menubar justify-content-between fixed-top '>
      <div className='navbar-logo'>
      <Navbar.Brand href="#home"> <img src={headerLogo} alt="zirve prefabrik  logo" /> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </div>
      <div>
      <Navbar.Collapse id="basic-navbar-nav justify-content-end">
        <Nav className="me-auto">
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
