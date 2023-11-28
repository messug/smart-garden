import React from 'react';
import './App.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  FaUser,
  FaAddressBook,
  FaCalendarAlt,
  FaHouseUser,
  FaTv,
  FaCog,
} from 'react-icons/fa';


  const Carousel = ({ children }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
    };

    return <Slider {...settings}>{children}</Slider>;
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return <div className="arrow prev" onClick={onClick}><span>&#8249;</span></div>;
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return <div className="arrow next" onClick={onClick}><span>&#8250;</span></div>;
  };

function App() { 
  
 return (
    <div className="App-container">
      <Carousel>
      <div className='app-box'>
      <FaUser size={200}/>
      
      </div>
      <div className='home-box'>
      <FaHouseUser size={200}/>
      </div>
      <div className='contact-box'>
        
        <FaAddressBook size={200}  />
      </div>
      <div className='set-box'>
        
        <FaCalendarAlt size={200} />
      </div>
      <div className='enter-box'>
        
        <FaTv size={200}/>
      </div>
      <div className='set-box'>
      <FaCog size={200} color='black'/>
      {/* <h2>Setting</h2> */}
      </div>
      </Carousel>
    </div>
  );
}

export default App;
