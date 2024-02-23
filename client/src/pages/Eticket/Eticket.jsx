import React from 'react'
import './Eticket.scss'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
const Eticket = () => {
  return (
    <>
    <Helmet>
<title>Elektron bilet | iTicket.AZ — Biletlərin onlayn satışı</title>
    </Helmet>
     <section className='rules'>
        <div className='container'>
            <h2>Elektron bilet</h2>
            <div className='row'>
          <p className='rules'>
           
            
            <span>Bu xidmət növündən istifadə etməklə, siz vaxtınıza qənaət edə və biletlərin alınma prosessini maksimum rahat və sadə şəkildə həyata keçirə bilərsiniz.</span>
            <br />
            <br />
            <b>Bu xidmət növü nəyə görə rahatdır?</b>
            
            <span>Elektron bilet istifadəçinin şəxsi kabinetində elektron şəkildə saxlanılır və bu o deməkdir ki, siz onu unuda yaxud itirə bilməzsiniz. Elektron biletin oğurlanması mümkün deyil. Dünyanın istənilən yerində sadəcə internetə daxil olmaqla, elektron bileti əldə edə bilərsiniz. Vaxta qənaət: kassaya getmək, kuryer xidmətlərindən istifadə etmək, biletin çatdırılmasını gözləməyə ehtiyac yoxdur.</span>
            <br />
            <br />
            <b>Elektron bileti necə sifariş etmək olar?</b>
            
            <span>Biletin ödənişini istənilən bank kartı vasitəsi ilə həyata keçirə bilərsiniz. Onlayn ödənişdən sonra biletiniz avtomatik olaraq, qeydiyyat zamanı istifadə etdiyiniz elektron ünvanınıza göndəriləcək. Bundan əlavə, siz “Mənim sifarişlərim” bölməsinə daxil olub bileti çap edə bilərsiniz.</span>
            <br />
            <br />
            <b>Elektron bileti necə dəyişmək və ya qaytarmaq olar?</b>
           
            <span>Elektron biletin qaytarılması və ya dəyişdirilməsi həm onlayn, həm də 28 Mall və Gənclik Mall ticarət mərkəzlərində yerləşən satış məntəqəsində “Biletin qaytarılması və dəyişdirilməsi” bölümündə qeyd olunan qaydalara əsasən geri qaytarıla bilər.</span>
           
           
          </p>
                <ul className='static_sidebar'>
  <Link to='/page/faq' >Ən çox verilən suallar</Link>
    <Link to='/page/support' >Dəstək</Link>
    <Link to='/page/rules' >Şərtlər və Qaydalar</Link>
    <Link to='/page/eticket' className={location.pathname === '/page/eticket' ? 'active' : ''}>Elektron bilet</Link>
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

export default Eticket