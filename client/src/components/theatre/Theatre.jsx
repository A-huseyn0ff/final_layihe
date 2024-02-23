import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay,Navigation } from 'swiper/modules';
import './theatre.scss'
// Import your custom hook
import useProduct from '../../hooks/useProduct.jsx';
import { Link } from 'react-router-dom';
const Theatre = () => {
    const { data } = useProduct();
  
    const renderSlides = () => {
      return data.flatMap((item, index) => {
        // Check if the "popular" category is present in the item's category array
        const isPopular = item._id.includes("65cdf43f2201129e6cacc998");
    
        // If the item is popular and has events, render slides for each event; otherwise, return null
        if (isPopular && item.events.length > 0) {
          return item.events.map((event, eventIndex) => {
            // Convert the ISO string to a Date object
            const eventDate = new Date(event.time);
    
            // Options for formatting the date
            const options = { day: 'numeric', month: 'long', year: 'numeric' };
    
            // Format the date using toLocaleDateString
            const formattedDate = eventDate.toLocaleDateString('en-US', options);
    
            return (
              <SwiperSlide key={`${index}_${eventIndex}`} className='slide'>
                <Link to={`/detail/${event._id}`}>
                  <div className='img'>
                    <img src={event.bgImage} className='bg' alt="" />
                    <img src={event.mainJPG} alt="" className='main'/>
                  </div>
                  <div className='info'>
                    {/* Display the formatted date */}
                    <span>{formattedDate}    •    {event.aboutplace.placename}</span>
                  </div>
                </Link>
              </SwiperSlide>
            );
          });
        } else {
          return null; // Return null if the item is not popular or has no events
        }
      });
    };
      
  return (
    <>
    <section className='popular'>
        <h2>Tamaşalar</h2>
        <Swiper
        rewind={true}
        navigation={true}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        slidesPerView={4}
        spaceBetween={30}
        modules={[Autoplay,Navigation]}
        className="popularSwiper"
      >
        {renderSlides()}
      </Swiper>
    </section>
    
    </>
  )
}

export default Theatre