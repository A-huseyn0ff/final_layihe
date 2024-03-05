import './header.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

// Import your custom hook
import useProduct from '../../hooks/useProduct.jsx';
import { Link } from 'react-router-dom';

const Header = () => {
  // Use the custom hook to fetch data
  const { data } = useProduct();

  // Render the fetched data inside SwiperSlides
  const renderSlides = () => {
    return data.map((item) => {
        return item.events.map((eventpr,index)=>(
            <SwiperSlide key={index} className='slide'>
                <Link to={`/detail/${eventpr._id}`}>
                    <img src={eventpr.detailImage}  />
                </Link>
            </SwiperSlide>
        ));
    });
};


  return (
    <>
      <header>
        <span></span>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {renderSlides()}
      </Swiper>
      </header>
    </>
  );
};

export default Header;
