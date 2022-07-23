import React from 'react'
import { Carousel,Button } from 'react-bootstrap'
import PropTypes from 'prop-types';
import './Mainpage.scss'
import Images from '../../constants/images';
import Swiper from 'swiper';
import './script.js'

function Picture(props) {
  const { title, desc, backgroundUrl } = props;

  const PictureStyle = backgroundUrl
    ? { backgroundImage: `url(${backgroundUrl})` }
    : {}

  
const swiper = new Swiper(".books-slider", {
  loop:true,
  centeredSlides: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


  return (
    // <Carousel className='carouselbox' >
    //   <Carousel.Item className='banner' style = {PictureStyle}>
    //     <img
    //       className="banner"
    //       src= {backgroundUrl}
    //       alt=" "

    //     />
    //     <Carousel.Caption>
    //       <h3 className='banner__title'>{title}</h3>
    //       <p className='banner__desc'>{desc}</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>

    // <section className='banner' style = {PictureStyle} >
    //   <h3 className='banner__title'>{title}</h3>
    //   <p className='banner__desc'>{desc}</p>
    // </section>

    // <Carousel className='carouselbox'>
    // <Carousel.Item className='carouselbox__item'>
    //   <img
    //     className="carouselbox__image"
    //     src={Images.BANNER1}
    //     alt="First slide"
    //   />
    //   <Carousel.Caption>
    //     <h3>{title}</h3>
    //     <p>{desc}</p>
    //   </Carousel.Caption>
    // </Carousel.Item>
    // <Carousel.Item className='carouselbox__item'>
    //     <img
    //       className="carouselbox__image"
    //       src={Images.BANNER2}
    //       alt="Second slide"
    //     />

    //     <Carousel.Caption>
    //     <h3>{title}</h3>
    //     <p>{desc}</p>
    //     </Carousel.Caption>
    //   </Carousel.Item >
    //   <Carousel.Item className='carouselbox__item'>
    //     <img
    //       className="carouselbox__image"
    //       src={Images.BANNER3}
    //       alt="Third slide"
    //     />

    //     <Carousel.Caption>
    //     <h3>{title}</h3>
    //     <p>{desc}</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>

    <section className='home' id='/'>
      <div className="row">
        <div className="content">
          <h3>Giảm giá 70%</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button className='btn' >Mua ngay</Button>
        </div>

        <div className="swiper books-slider">
          <div className="swiper-wrapper">
            <a href="#" className='swiper-slide'><img src={Images.BOOK1} alt="" /></a>
            <a href="#" className='swiper-slide'><img src={Images.BOOK2} alt="" /></a>
            <a href="#" className='swiper-slide'><img src={Images.BOOK3} alt="" /></a>
            
            <a href="#" className='swiper-slide'><img src={Images.BOOK4} alt="" /></a>
            <a href="#" className='swiper-slide'><img src={Images.BOOK5} alt="" /></a>
            <a href="#" className='swiper-slide'><img src={Images.BOOK6} alt="" /></a>
          </div>
          <img src={Images.STAND} className="stand" alt=""/>
        </div>
      </div>
    </section>
  )
}

export default Picture