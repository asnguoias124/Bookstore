import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Images from '../../constants/images';
import './Mainpage.scss';
import './script.js';

function Picture(props) {

  

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

        <div className="books-slider">
          <div className="swiper-wrapper">
            <Link to='/' className='swiper-slide'><img src={Images.BOOK1} alt="" /></Link>
            <Link to='/' className='swiper-slide'><img src={Images.BOOK2} alt="" /></Link>
            <Link to='/' className='swiper-slide'><img src={Images.BOOK3} alt="" /></Link>
            
            <Link to='/' className='swiper-slide'><img src={Images.BOOK4} alt="" /></Link>
            <Link to='/' className='swiper-slide'><img src={Images.BOOK5} alt="" /></Link>
            <Link to='/' className='swiper-slide'><img src={Images.BOOK6} alt="" /></Link>
          </div>
          <img src={Images.STAND} className="stand" alt=""/>
        </div>
      </div>
    </section>
  )
}

export default Picture