import React from 'react'
import Menubar from './menubar'
import Slider from './slider'
import "./header.scss"
import Title from './title'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Footer from '../footer/footer'

const Header = () => {
  return (
    <div className='home'>
    <div className='header mt-0'>
       <div className='menubar mt-0'>
      <Menubar/>
    </div>


    <div className='swiper-slider'>
      <Slider/>
    </div>

    </div>
    
    <div className='title'> <Title/> </div>
     <Container>
    <Row className='cards'>
      <Col md={4} sm={6} >
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  className='img-fluid ' src={require(`../../../assets/img/product/03819ee6-44ea-4a31-9601-a7cf58127cca.jpg`)} />
      <Card.Body>
        <Card.Title>Prefabrik Ofis</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </Col>
      <Col md={4} sm={6}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='img-fluid ' src={require(`../../../assets/img/product/0aa0ee14-5e8c-4244-a15c-266c8e5e33a0.jpg`)} />
      <Card.Body>
        <Card.Title>Konteyner</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </Col>
      <Col md={4} sm={6}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='img-fluid h-25' src={require(`../../../assets/img/product/03819ee6-44ea-4a31-9601-a7cf58127cca.jpg`)} />
      <Card.Body>
        <Card.Title>Prefabrik Şantiye</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </Col>
      <Col md={4} sm={6}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='img-fluid' src={require(`../../../assets/img/product/1ffd7111-85c0-4ddb-a0d5-227a76b86cdd.jpg`)}/>
      <Card.Body>
        <Card.Title>Konteyner Evler</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </Col>
      <Col md={4} sm={6}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='img-fluid' src={require(`../../../assets/img/product/20037216-9307-42a8-9619-cf604f27ff0d.jpg`)} />
      <Card.Body>
        <Card.Title>Konteyner Wc & Banyo</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </Col>
      <Col md={4} sm={6}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='img-fluid' src={require(`../../../assets/img/product/2b0aac9b-2c97-4ee1-955e-19baeb62eb1b.jpg`)} />
      <Card.Body>
        <Card.Title>Prefabrik</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </Col>
    </Row>
   
    </Container>
    <Footer/>

    </div>
  )
}

export default Header
