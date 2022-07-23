import React from 'react'
import { Carousel } from 'react-bootstrap'
import PropTypes from 'prop-types';
import './Mainpage.scss'
import Images from '../../constants/images';

Picture.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  backgroundUrl: PropTypes.string,
}

Picture.defaultProps = {
  title: '',
  desc: '',
  backgroundUrl: '',
}

 function Picture(props){
  const { title, desc, backgroundUrl } = props;
  
  const PictureStyle = backgroundUrl
  ? { backgroundImage: `url(${backgroundUrl})` }
  : {}

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

    <Carousel className='carouselbox'>
    <Carousel.Item className='carouselbox__item'>
      <img
        className="carouselbox__image"
        src={Images.BANNER1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>{title}</h3>
        <p>{desc}</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='carouselbox__item'>
        <img
          className="carouselbox__image"
          src={Images.BANNER2}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>{title}</h3>
        <p>{desc}</p>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item className='carouselbox__item'>
        <img
          className="carouselbox__image"
          src={Images.BANNER3}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>{title}</h3>
        <p>{desc}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
  )
}

export default Picture