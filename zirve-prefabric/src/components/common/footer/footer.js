import React from 'react'
import "./footer.scss"
import logoFooter from "../../../assets/img/product/footerLogoSiyah.jpg"
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='footer'>
        <Container>
        <Row>
            <Col lg={3} md={6}> <img src={logoFooter} alt="footer logo" className='img-fluid' /></Col>
            <Col lg={3} md={6}>
                <h2>Kimiz Biz</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nihil possimus magni voluptates a vero architecto sed alias omnis ullam, ipsam fugit ipsum aut, odit laboriosam eaque voluptatum nesciunt repellendus? </p>
            </Col>
            <Col lg={3} md={6}> 
               <h2>İletişim</h2>
               <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
               </ul>
            </Col>
            <Col lg={3} md={6}>
                 <h2>Adresimiz</h2>
                 <iframe src="" frameborder="0"></iframe>
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Footer
