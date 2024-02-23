import React from 'react'
import './Footer.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom'
const Footer = () => {
      const location = useLocation();
      const navigate=useNavigate()
  return (
    <footer className={location.pathname === '/' ? '' : 'footer_active'}>
      <div className='footer_container'>
     <div className='col'>
     <div className='logo' onClick={()=>navigate('/')}>
        <img src="https://asset.brandfetch.io/idAzxb064b/idSwbUn4qo.png" alt="" />
        <h1>ticket</h1>
        </div>
        <div className='contact'>
          <p>Dəstək xidməti</p>
          <a href="tel:+994124242424" className="phone">+994 12 424 24 24</a>
        </div>
     </div>
     <ul className='col'>
      <h2>Məlumat</h2>
      <li><Link to={'/page/faq'}>Ən çox verilən suallar</Link>
</li>
      <li><Link to={'/page/support'}>Dəstək</Link>
</li>
      <li>
      <Link to={'/page/rules'}>Şərtlər və Qaydalar</Link>
      

      </li>
      <li>
      <Link to={'/page/eticket'}>Elektron bilet</Link>
      

      </li>
      <li>
      <Link to={'/page/return'}>Biletin qaytarılması və dəyişdirilməsi</Link>
      

      </li>
      <li>
      <Link to={'/page/privacy'}>Məxfilik</Link>
      
      </li>
     </ul>
     <ul className='col'>
      <h2>iTicket</h2>
      <li>
      <Link to={'/page/about'}>Haqqımızda</Link>
</li>
      <li>Məkanlar
</li>
      <li><Link to={'/page/point-of-sales'}>Biletlərin Satış Məntəqələri</Link>
</li>
      <li>
      <Link to={'/page/krf'}>Qarabağ Dirçəliş Fondu</Link>
</li>
      <li><Link to={'/page/contacts'}>Əlaqə</Link></li>
     </ul>
     <ul className='col'>
      <h2>Təhlükəsizlik</h2>
<p>Bütün ödənişlər Visa, Visa Electron, Maestro və MasterCard-dan 3D Secure ilə qorunur.</p>
      <img src="https://iticket.az/images/cards.svg" alt="" className='visa'/>
     </ul>
      </div>
      <div className='copyright'>
        <h5>ITICKET®, «İTİCKET» MMC-nin qeydə alınmış əmtəə nişanıdır.</h5>
        <ul className='icons'>
          <li><i class="fa-brands fa-facebook-f"></i></li>
          <li><i class="fa-brands fa-instagram"></i></li>
          <li><i class="fa-brands fa-tiktok"></i></li>
          <li><i class="fa-brands fa-twitter"></i></li>
          <li><i class="fa-brands fa-linkedin-in"></i></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer