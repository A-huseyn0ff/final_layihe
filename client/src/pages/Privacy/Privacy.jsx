import React from 'react'
import './privacy.scss'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
const Privacy = () => {
  return (
    <>
     <Helmet>
<title>Məxfilik | iTicket.AZ — Biletlərin onlayn satışı</title>
    </Helmet>
     <section className='rules'>
        <div className='container'>
            <h2>Məxfilik</h2>
            <div className='row'>
          <p className='rules'>
           
            <b>I. Şəxsi məlumatdan necə istifadə edirik</b>
            <span>Sizin şəxsi məlumatlar bu Məxfilik Siyasəti və iTicket.az veb-səhifəsinin təşkilatçı və ya məkanla müqavilə əlaqələrinə əsasən xüsusi tədbirlə bağlı aldığınız biletlər üçün yalnız iTicket.az ilə paylaşılır. Şəxsi məlumatlarınız veb-səhifədə apardığınız əməliyyatlarla bağlı lazım olduqda tərəfimizdən sizinlə telefon və ya elektron poçt vasitəsi ilə əlaqə saxlamaq üçün istifadə olunur. Apardığınız əməliyyatlarla əlaqədar olmayan məlumatlarla bağlı tam razılığınız olmadan şəxsi məlumatlarınızdan istifadə edilməyəcək və üçüncü tərəfə ötürülməyəcək.</span>
            <br />
            <br />
            <b>II. Sosial şəbəkə plaginləri</b>
            
            <span>Veb-səhifəmiz bir çox sosial şəbəkələr üçün sosial plaginlərdən ibarətdir. Sosial plagindən (məsələn, “Bəyənmək/Tövsiyyə etmək kimi) ibarət veb-səhifəyə daxil olduqda istifadəçinin brauzeri sosial şəbəkə serverlərinə bağlanır və sosial plaginlər üçün tələb olunan məzmun yüklənir. İstifadəçi öz sosial şəbəkə hesabına daxil olduqda, sosial şəbəkə həmin ziyarəti istifadəçinin sosial şəbəkə hesabındakı səhifəsinə bağlaya bilər. İstifadəçi həmin məlumatın sosial şəbəkəyə ötürülməsini istəmədikdə, veb-səhifəmizə baş çəkməzdən əvvəl həmin sosial şəbəkədən çıxmalıdır.  </span>
            <br />
            <br />
            <b>
III. Veb brauzer kukiləri</b>
            
            <span>Veb-səhifəmiz istifadəçi təcrübəsini artırmaq üçün “kukilər”dən istifadə edir. İstifadəçinin veb brauzeri həmin kukiləri qeyd edib saxlamaq məqsədilə, o cümlədən bəzən onlar barədə məlumatı izləmək məqsədilə onları sərt diskə yerləşdirir. İstifadəçi kukilərdən imtina etmək üçün öz veb brauzerini tənzimləməyi və ya təyin etməyi seçə bilər, ya da kukilərin göndərildiyi zaman bu barədə xəbərdar edilməsini seçə bilər. Bunu edərkən nəzərə alın ki, veb-səhifənin bəzi hissələri lazımi şəkildə işləməyə bilər.</span>
           
           
           
          </p>
                <ul className='static_sidebar'>
  <Link to='/page/faq' >Ən çox verilən suallar</Link>
    <Link to='/page/support' >Dəstək</Link>
    <Link to='/page/rules' >Şərtlər və Qaydalar</Link>
    <Link to='/page/eticket' >Elektron bilet</Link>
    <Link to='/page/return'>Biletin qaytarılması və dəyişdirilməsi</Link>
    <Link to='/page/privacy' className={location.pathname === '/page/privacy' ? 'active' : ''}>Məxfilik</Link>
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

export default Privacy