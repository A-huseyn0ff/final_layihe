import React from 'react'
import './support.scss'
import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet';
const Support = () => {
    const location = useLocation();
  return (
    <>
    <Helmet>
<title>Dəstək | iTicket.AZ — Biletlərin onlayn satışı</title>
    </Helmet>
    <section className='support'>
        <div className='container'>
            <h2>Dəstək</h2>
            <div className='row'>
                <p className='support_txt'>
                «Ən çox verilən suallar» bölməsində suallarınıza cavab tapa bilmədiyiniz halda +994 12 424 24 24 nömrəsi ilə əlaqə saxlayaraq «Müştəri xidmətləri» komandamızla əlaqə saxlayın. Bütün qeyd və təkliflərinizi elektron poçt ünvanımıza yaza bilərsiniz: info@iticket.az.

MÜŞTƏRİ XİDMƏTLƏRİMİZ HƏR GÜN 24 SAAT XİDMƏTİNİZDƏDİR.
                </p>
                <ul className='static_sidebar'>
  <Link to='/page/faq' >Ən çox verilən suallar</Link>
    <Link to='/page/support' className={location.pathname === '/page/support' ? 'active' : ''}>Dəstək</Link>
    <Link to='/page/rules'>Şərtlər və Qaydalar</Link>
    <Link to='/page/eticket'>Elektron bilet</Link>
    <Link to='/page/return'>Biletin qaytarılması və dəyişdirilməsi</Link>
    <Link to='/page/privacy'>Məxfilik</Link>
    <Link to='/page/about'>Haqqımızda</Link>
    <Link to='/page/point-of-sales'>Biletlərin Satış Məntəqələri</Link>
    <Link to='/page/krf'>Qarabağ Dirçəliş Fondu</Link>
    <Link to='/page/contacts'>Əlaqə</Link>
  </ul>
            </div>
          
        </div>
    </section>
    </>
  )
}

export default Support