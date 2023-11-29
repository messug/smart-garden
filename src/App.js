import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './App.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FaUser, FaAddressBook, FaCalendarAlt, FaHouseUser, FaTv, FaCog } from 'react-icons/fa';

const Carousel = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow onClick={() => setCurrentSlide(currentSlide + 1)} />,
    prevArrow: <PrevArrow onClick={() => setCurrentSlide(currentSlide - 1)} />,
  };

  return (
    <div>
      <Slider {...settings} afterChange={(index) => setCurrentSlide(index)}>
        {children}
      </Slider>
      <p>{currentSlide}</p>
    </div>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

const App = () => {
  // const history = useHistory();
  //  history.push('/Home.jsx');
  // };
  // const handleHomeBoxClick = () => {
  return (
    <div className="App-container">
      <h1>React 3D Slider</h1>
      <Carousel> 
       <div className='app-box' >
      <FaUser size={300}/>
      
      </div>
      <div className='home-box'>
      <FaHouseUser size={300}/>
      </div>
      <div className='contact-box'>
        
        <FaAddressBook size={300}  />
      </div>
      <div className='cal-box'>
        
        <FaCalendarAlt size={300} />
      </div>
      <div className='enter-box'>
        
        <FaTv size={300}/>
      </div>
      <div className='set-box'>
      <FaCog size={300} color='black'/>
      {/* <h2>Setting</h2> */}
      </div>
      </Carousel>
      </div>
  );
};

export default App;
























  
   
