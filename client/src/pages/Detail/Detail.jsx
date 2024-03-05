import React, { useEffect, useState } from "react";
import axios from "axios";
import "./detail.scss";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Link, animateScroll as scroll } from "react-scroll";
import { toast, ToastContainer } from 'react-toastify';
const Detail = () => {
  const [detail, setDetail] = useState([]);
  const [showAboutDetail, setShowAboutDetail] = useState(true);
  const [showLanguageAgeDetail, setShowLanguageAgeDetail] = useState(false);
  const { id } = useParams();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [similarItems, setSimilarItems] = useState([]);
  
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/events/${id}`
        );
        // Format the date from response
        response.data.time = new Date(response.data.time).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
        setDetail(response.data);
      } catch (error) {
        console.error("Error fetching detail:", error);
      }
    };

    fetchDetail();
  }, [id]);

 

  useEffect(() => {
    const fetchSimilarItems = async () => {
      try {
        let categoryToFetch = detail.category?.[0]._id;
        if (
          categoryToFetch &&
          (categoryToFetch === "65cdf43f2201129e6cacc998" ||
            categoryToFetch === "65cdf4852201129e6cacc99c" ||
            categoryToFetch === "65cdf4902201129e6cacc99e" ||
            categoryToFetch === "65cdf49a2201129e6cacc9a0" ||
            categoryToFetch === "65cdf5382201129e6cacc9a6" ||
            categoryToFetch === "65cdf54f2201129e6cacc9a8" ||
            categoryToFetch === "65cdf5712201129e6cacc9ab")
        ) {
          const response = await axios.get(
            `http://localhost:8000/categories/${categoryToFetch}`
          );
          setSimilarItems(response.data);
        }
      } catch (error) {
        console.error("Error fetching similar items:", error);
      }
    };

    fetchSimilarItems(similarItems);
  }, [detail.category?.[0]._id]);

  const handleAboutClick = () => {
    setShowAboutDetail(true);
    setShowLanguageAgeDetail(false);
  };

  const handleLanguageAgeClick = () => {
    setShowLanguageAgeDetail(true);
    setShowAboutDetail(false);
  };

  const scrolltoabout = () => {
    const aboutSection = document.getElementById("about-section");

    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrolltoPlace = () => {
    const placeSection = document.getElementById("palce-section");

    if (placeSection) {
      placeSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const addToBasket = async () => {
    try {
      // Check if user is logged in
  
  
      // If user is logged in, proceed with adding to basket
      const response = await axios.post(`http://localhost:8000/users/${profile._id}/basket`, {
        eventId: detail._id
      });
      toast.success(`${detail.name} is added to your basket`);
      console.log(response.data.message); // Log success message
    } catch (error) {
      toast.error(`${detail.name} is not added to your basket`);
      console.error("Error adding event to basket:", error);
      // Handle error, show toast message, etc.
    }
  };
 
  return (
    <>
      {detail && (
        <>
          <Helmet>
            <title>{`${detail.name}  | iTicket.AZ — Biletlərin onlayn satışı`}</title>
          </Helmet>
          <div className="detail_img">
            <img src={detail.detailImage} alt="" />
          </div>
          <div className="navigation_detail">
            <div className="container">
              <a className="detail_nav" onClick={scrolltoPlace}>
                <div className="img">
                  <img
                    src="https://iticket.az/images/venue.svg"
                    alt=""
                    className="venue"
                  />
                  <img src="https://iticket.az/images/date.svg" alt="" />
                </div>
                <ul>
                  <li>Məkan</li>
                  <li>Tarix</li>
                </ul>
              </a>
              <a className="detail_nav" onClick={scrolltoabout}>
                <div className="img">
                  <span>{detail.languageandage?.[0]}</span>
                  <img
                    src="https://iticket.az/images/locale.svg"
                    alt=""
                  />
                </div>

                <ul>
                  <li>Dil</li>
                  <li>Yaş məhdudiyyəti</li>
                </ul>
              </a>
              <a href="" className="detail_nav">
                <div className="img">
                  <img
                    src="https://iticket.az/images/currency.svg"
                    alt=""
                    className="venue"
                  />
                  <img
                    src="https://iticket.az/images/tickets.svg"
                    alt=""
                  />
                </div>
                <ul>
                  <li>Qiymət</li>
                  <li>Biletlər haqda</li>
                </ul>
              </a>
              <a className="detail_nav" onClick={scrolltoabout}>
                <img src="https://iticket.az/images/info.svg" alt="" />
                <ul>
                  <li>Tədbir haqqında</li>
                </ul>
              </a>
            </div>
          </div>

          <section className="buy_ticket">
            <div className="buy_container">
              <div className="info">
                <div className="col_1">
                 <p> {detail.name} (Dil:{detail.languageandage?.[1]}) (
                  {detail.languageandage?.[0]})</p>
                  <h1>{detail.aboutplace?.placename}</h1>
                </div>
                <div className="col_2">
                  <h1>Tarix</h1>
                  <p>{detail.time}</p>
                </div>
                <div className="col_3">
                  <h1>Qiymət</h1>
                  {detail.seats && detail.seats.length > 0 && (
  <>
    <p>
      {detail.seats[0].price} - {detail.seats[detail.seats.length - 1].price} ₼
    </p>
  </>
)}

                  
                </div>
              </div>
              {/* <div className="seats_container">
              
               
              {detail.seats && detail.seats.length > 0 && (
  <div className="seats_row">
    {detail.seats && detail.seats.length > 0 && (
  <div className="seats_col">
    {detail.seats.map((seat) => (
      <div className="seat" key={seat._id}>
        <img
          src="https://static.thenounproject.com/png/736626-200.png"
          alt=""
        />
        <span>{seat.seat}</span>
      </div>
    ))}
  </div>
)}

  </div>
)}

              
           
              </div> */}
              {detail.seats && detail.seats.length > 0 && (
  <div className="seats_container">
    {detail.seats.reduce((acc, seat) => {
      if (!acc[seat.row]) {
        acc[seat.row] = [];
      }
      acc[seat.row].push(
        <div className="seat" key={seat._id}>
          <div className="seat_info">
<div className="seat_position">
  <div className="col">
    <h2>Sıra</h2>
    <p>{seat.row}</p>
  </div>
  <div className="col">
   <h2>Yer</h2>
   <p> {seat.seat}</p>
  </div>
</div>
<button onClick={addToBasket}>AS Standart {seat.price} ₼</button>
            <div className="arrow"></div>
          </div>
          <img
            src="https://static.thenounproject.com/png/736626-200.png"
            alt=""
          />
          <span>{seat.seat}</span>
        </div>
      );
      return acc;
    }, []).map((rowSeats, index) => (
      <div className="seats_row" key={index}>
        {rowSeats}
      </div>
    ))}
  </div>
)}

            </div>
          </section>

          <section className="about" id="about-section">
            <div className="about_container">
              <div className="left">
                <div className="btn">
                  <button
                    onClick={handleAboutClick}
                    className={showAboutDetail ? "button_active" : ""}
                  >
                    Tədbir haqqında
                  </button>
                  <button
                    onClick={handleLanguageAgeClick}
                    className={showLanguageAgeDetail ? "button_active" : ""}
                  >
                    Yaş məhdudiyyəti / Dil
                  </button>
                </div>
                <div className="info">
                  {showAboutDetail && detail.about}{" "}
                  {showLanguageAgeDetail &&
                    `${detail.languageandage[0]}/${
                      detail.languageandage[1]
                    }`}
                </div>
              </div>
              <img src={detail.mainJPG} alt="" className="right" />
            </div>
          </section>
          <section className="place" id="palce-section">
            <div className="place_container">
              <h2>Məkan yeri</h2>
              <div className="src">
                <iframe
                  src={detail.aboutplace?.iframelink}
                  frameborder="0"
                ></iframe>
                <div className="aboutplace">
                  <h1>{detail.aboutplace?.placename}</h1>
                  <span>{detail.aboutplace?.placeinfo}</span>
                  <h1>Telefon</h1>
                  <span>{detail.aboutplace?.mobile}</span>
                </div>
              </div>
            </div>
          </section>
          <section className="same_product">
            <div className="same_container">
              <h2>Oxşar tədbirlər</h2>
              <div className="row">
                {similarItems.events &&
                  similarItems.events.map((pr) => (
                    <a href={`http://localhost:5173/detail/${pr._id}`} key={pr._id}>
                      <div className="col">
                        <div className="img">
                          <img src={pr.bgImage} className="bg" alt="" />
                          <img src={pr.mainJPG} alt="" className="main" />
                        </div>
                        <div className="info">
                          <span>{pr.aboutplace.placename}</span>
                        </div>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Detail;
