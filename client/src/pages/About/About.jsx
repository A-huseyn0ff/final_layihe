import React from 'react'
import { Link } from 'react-router-dom'
import './about.scss'
import { Helmet } from 'react-helmet'
const About = () => {
  return (
    <>
    <Helmet>
<title>Haqqımızda | iTicket.AZ — Biletlərin onlayn satışı</title>
    </Helmet>
     <section className='about'>
        <div className='container'>
            
            <div className='row'>
                <div className='about_div'>
                <img src="https://iticket.az/uploads/about-title.png" alt="" />
                <img src="https://iticket.az/uploads/3d-map.jpg" alt="" />
                <p>
                iTicket.az - 2016-cı ildən etibarən öz fəaliyyətinə başlamışdır. iTicket.az həm onlayn həm də offlayn olaraq konsertlərə, teatrlara, idman və əyləncə tədbirlərinə bilet satışını reallaşdırır. Bakı şəhərində 20-yə yaxın satış nöqtəsi iTicket.az idarəçiliyi altında fəaliyyət göstərir. iTicket.az IV İslam Həmrəyliyi Oyunları, 2017, 2018 və 2019 Formula 1 Azərbaycan Qran-Pri yarışları, 2017 Voleybol üzrə qadınlararası Avropa Çempionatı, UEFA Çempionlar Liqasının qrup mərhələsi, Bakıda velosiped idmanının “BMX Racing” növü üzrə 2018-ci il dünya çempionatı, ЖАРА'18 və 19 musiqi festivalı və AFFA kimi tədbirlərin rəsmi əməkdaşı və bilet satışı üzrə təchizatçısıdır. iTicket.az bilet alışı prosessinin daha səmərəli və rahat etmək üçün öz məhsul və xidmətlərini təkmilləşdirmək üçün çalışır.
                </p>
                <ul>
                    <li>Şirkətin adı</li>
                    <li>«İTİCKET» MMC</li>
                    <li>VÖEN</li>
                    <li>1701956271</li>
                    <li>Dövlət Reyestr Çıxarışın nömrəsi</li>
                    <li>1601020018130100</li>
                    <li>Ünvan</li>
                    <li>Azərbaycan, Bakı, Səməd Vurğun 34, AF Mall 14-cü mərtəbə, ofis 36 AZ1014</li>
                </ul>
                </div>
                <ul className='static_sidebar'>
  <Link to='/page/faq' >Ən çox verilən suallar</Link>
    <Link to='/page/support' >Dəstək</Link>
    <Link to='/page/rules'>Şərtlər və Qaydalar</Link>
    <Link to='/page/eticket'>Elektron bilet</Link>
    <Link to='/page/return'>Biletin qaytarılması və dəyişdirilməsi</Link>
    <Link to='/page/privacy'>Məxfilik</Link>
    <Link to='/page/about' className={location.pathname === '/page/about' ? 'active' : ''}>Haqqımızda</Link>
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

export default About