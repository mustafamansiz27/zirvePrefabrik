import React from 'react'
import Menubar from './menubar'
import Slider from './slider'
import "./header.scss"
import Title from './title'

const Header = () => {
  return (
    <div className='home'>
    <div className='header'>
       <div className='menubar'>
      <Menubar/>
    </div>


    <div className='swiper-slider'>
      <Slider/>
    </div>
    
    </div>
    
    <div className='title'> <Title/> </div>

    </div>
  )
}

export default Header
