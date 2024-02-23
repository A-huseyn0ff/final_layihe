import React from 'react'
import { Link } from 'react-router-dom'
import './rules.scss'
import { Helmet } from 'react-helmet'
const Rules = () => {
  return (
    <>
    <Helmet>
<title>Şərtlər və Qaydalar | iTicket.AZ — Biletlərin onlayn satışı</title>
    </Helmet>
     <section className='rules'>
        <div className='container'>
            <h2>Şərtlər və Qaydalar</h2>
            <div className='row'>
          <p className='rules'>
            <b>Ümumi qaydalar və şərtlər</b>
            
            <span>iTicket.az veb-səhifəsindən istifadə etməklə siz aşağıdakı “Şərtlərə” və Azərbaycan Respublikasının qanunvericiliyi əsasında tənzimlənən bütün mövcud qanun və qaydalara riayət edəcəyinizi açıq şəkildə bildirirsiniz.  </span>
            <br />
            <br />
            <b>Ticarət nişanları</b>
            
            <span>iTicket.az veb-səhifəsində olan loqotiplər iTicket.az veb-səhifəsinə məxsus qeydiyyatdan keçmiş əmtəə nişanlarıdır və heç bir halda iTicket.az şirkətinin qabaqcadan yazılı icazəsi olmadan istifadə edilə bilməz.</span>
            <br />
            <br />
            <b>Müəlliflik hüququ</b>
            
            <span>Bu veb-səhifənin məzmunu və proqram təminatı iTicket.az şirkətinin mülkiyyəti hesab olunur və müəlliflik hüquqları ilə qorunur. Bu qayda və şərtlərin məhdud lisenziya təminatında açıq şəkildə ifadə olunanlar istisna olmaqla, yerdə qalan heç bir halda iTicket.az öz ticarət nişanları, müəlliflik hüquqları və ya digər özəl məlumatları ilə bağlı hər hansı zidd ifadə və ya nəzərdə tutulan hüquqa yol vermir.</span>
            <br />
            <br />
            <b>İcazə verilən istifadə</b>
           
            <span>Sizə yalnız bu veb-səhifəsindəki səhifələrə baş çəkmək, onlara baxmaq və onların nüsxəsini öz şəxsi istifadəniz üçün saxlamaq hüququ verilir və siz şəxsi istifadə məqsədi ilə tədbirlərə və reklam xarakterli məlumata baxmaqdan, və ya şəxsi istifadəniz üçün biletləri almaqdan və ya iTicket.az tərəfindən xüsusilə nəzərdə tutulmuş şəxsi məqsəd üçün satmaqdan başqa, yerdə qalan digər heç bir halda hər hansı məqsədlə veb-səhifəsindəki materialın surətini çoxalda, yükləyə, dərc edə, dəyişdirə və ya digər bir şəkildə yaya bilməzsiniz.</span>
            <br />
            <br />
            <b>Biletin qaytarılması və dəyişdirilməsi</b>
            
            <span>Qaytarılma və dəyişdirilmə qaydaları ilə əlavəyə keçid edərək tanış ola bilərsiniz.</span>
            <br />
            <br />
            <span>Qeyd: İcazəsiz bilet satışı, veb-səhifədəki hər hansı robot, hörümçək və ya digər avtomatlaşdırılmış cihazdan icazəsiz istifadə daxil olmaqla, və bundan savayı, veb-səhifəsində qanunsuz və/və ya icazəsiz istifadə araşdırılacaq və buna qarşı müvafiq qanuni tədbirlər görüləcəkdir.</span>
          </p>
                <ul className='static_sidebar'>
  <Link to='/page/faq' >Ən çox verilən suallar</Link>
    <Link to='/page/support' >Dəstək</Link>
    <Link to='/page/rules' className={location.pathname === '/page/rules' ? 'active' : ''}>Şərtlər və Qaydalar</Link>
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

export default Rules