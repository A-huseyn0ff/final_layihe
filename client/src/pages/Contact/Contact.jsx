import React from 'react'
import './contact.scss'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
const Contact = () => {
  return (
    <>
    <Helmet>
<title>Əlaqə | iTicket.AZ — Biletlərin onlayn satışı</title>
    </Helmet>
     <section className='contacts'>
        <div className='container'>
            <h2>Əlaqə</h2>
            <div className='row'>
          <div className='contact_con'>
           <div className='con'>
           <div className='office'>
            <b>Baş Ofis</b>
            
            <span>
            AF Mall 14-cü mərtəbə, ofis 36. Səməd Vurğun 34, AZ1014, Bakı, Azərbaycan
            </span>
           </div>
           <div className='office'>
            <b>Telefon</b>
            
            <span>
            +994 12 424-24-24
            </span>
           </div>
           <div className='office'>
            <b>Bütün təklif və iradlarınız üçün:</b>
           
            <span>
            info@iticket.az
            </span>
           </div>
           </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.459074963136!2d49.83907471240272!3d40.376516971327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da5a4c85e9f%3A0x8b209a8e1ed5eea9!2sAF%20Mall!5e0!3m2!1sen!2sus!4v1707140995604!5m2!1sen!2sus"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
                <ul className='static_sidebar'>
  <Link to='/page/faq' >Ən çox verilən suallar</Link>
    <Link to='/page/support' >Dəstək</Link>
    <Link to='/page/rules' >Şərtlər və Qaydalar</Link>
    <Link to='/page/eticket' >Elektron bilet</Link>
    <Link to='/page/return'>Biletin qaytarılması və dəyişdirilməsi</Link>
    <Link to='/page/privacy'>Məxfilik</Link>
    <Link to='/page/about'>Haqqımızda</Link>
    <Link to='/page/point-of-sales'>Biletlərin Satış Məntəqələri</Link>
    <Link to='/page/krf'>Qarabağ Dirçəliş Fondu</Link>
    <Link to='/page/contacts' className={location.pathname === '/page/contacts' ? 'active' : ''}>Əlaqə</Link>
  </ul>
            </div>
          
        </div>
    </section>
    </>
  )
}

export default Contact