import React, { useState } from 'react'
import './faq.scss'
import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet';
const FAQ = () => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(null);

    const handleQuestionClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  return (
    <>
    <Helmet>
<title>Ən çox verilən suallar | iTicket.AZ — Biletlərin onlayn satışı</title>
    </Helmet>
    <section className='info'>

    <div className='container'>
<h2>Ən çox verilən suallar</h2>
<div className='row'>
  <ul className='faq'>
<div className='faq_question'>
<li onClick={() => handleQuestionClick(0)}>1. Tədbirə giriş üçün Elektron Bileti çap etmək kifayətdirmi?</li>
  <p className={activeIndex === 0 ? 'active' : ''}>Bəli, elektron poçtunuza gələn e-bileti çap etməyiniz və yaxud mobil telefonunuzda göstərmək kifayətdir. Elektron biletlər çatdırılmır və ya fiziki biletlərlə əvəz olunmur.</p>
</div>
    <div className='faq_question'>
    <li onClick={() => handleQuestionClick(1)}>2. Biletləri nağd ödənişlə haradan əldə etmək olar?</li>
    <p className={activeIndex === 1 ? 'active' : ''}>
    Biletləri şəhərin bütün kassalarından, “28 Mall”, “Ganjlik Mall” ticarət mərkəzlərindən, həmçinin Heydər Əliyev Sarayının kassasından, ASAN Xidmət mərkəzlərindən və teatr kassalarından əldə edə bilərsiniz. Satış məntəqələri haqqında ətraflı məlumatla «Biletlərin satış məntəqələri» bölümündə tanış ola bilərsiniz.
    </p>
    </div>
     
<div className='faq_question'>
<li onClick={() => handleQuestionClick(2)}>3. Çatdırılma xidməti:</li>
    <p className={activeIndex === 2 ? 'active' : ''}>Çatdırılma xidməti, şənbə və bazar günləri istisna olmaqla, tədbir satışa çıxdığı andan tədbirə 5 gün qalanadək Bakı şəhəri daxilində 4-5 iş günü ərzində həyata keçirilir.</p>
</div>
 <div className='faq_question'>
 <li onClick={() => handleQuestionClick(3)}>4. Neçə yaşından etibarən uşaqlara “Uşaq tədbirlərinə” bilet alınmalıdır?</li>
    <p className={activeIndex === 3 ? 'active' : ''}>Uşaq tədbirləri üçün biletlər 3 yaşdan etibarən əldə olunmalıdır.
Yaş məhdudiyyəti haqqında məlumatı tədbirin səhifəsində tapa bilərsiniz.</p>
 </div>
   <div className='faq_question'>
   <li onClick={() => handleQuestionClick(4)}>5. Böyüklər üçün nəzərdə tutulmuş tədbirlərə neçə yaşdan etibarən uşaqların girişinə icazə verilir?</li>
    <p className={activeIndex === 4 ? 'active' : ''}>Böyüklər üçün nəzərdə tutulmuş tədbirlərə 6 yaşdan kiçik uşaqlar buraxılmır. 6 yaşdan yuxarı uşaqlar yalnız böyüklərin müşayiəti ilə əlavə biletlə tədbirə daxil ola bilərlər.</p>
   </div>
    <div className='faq_question'>
    <li onClick={() => handleQuestionClick(5)}>6. Saytdan sifariş etdikdə “Promo code” bölməsini doldurmaq mütləqdir?</li>
    <p className={activeIndex === 5 ? 'active' : ''}>Xeyr, “Promo kod” bölməsi yalnız təşkilatçılar öz tədbirinə müəyyən endirim təqdim etdikdə doldurulur.“Promo kod” tamaşaçılara tədbirin təşkilatçıları və ya iTicket.AZ tərəfindən təqdim edilməlidir.</p>
    </div>
    <div className='faq_question'>
    <li onClick={() => handleQuestionClick(6)}>7. Mən nə üçün qeydiyyatdan keçməliyəm?</li>
    <p className={activeIndex === 6 ? 'active' : ''}>Məlumatlarınızın qeydiyyatı bizə biletlər haqqında, bilet mövcudluğu və hər hansı bir sifarişinizin yeniləməsi haqqında məlumat verməyə imkan verir.</p>
    </div>
   <div className='faq_question'>
   <li onClick={() => handleQuestionClick(7)}>8. Biletlərim itirildikdə, oğurlandıqda, zədələndikdə nə etməliyəm?</li>
    <p className={activeIndex === 7 ? 'active' : ''}>Tədbirdən asılı olaraq fiziki Biletlər itirildikdə və ya oğurlandıqda biletin dəyərinin 15% - ni tutmaqla bərpa edilə bilər. E- biletləri onlayn hesabınızdan yenidən yükləyə bilərsiniz.
Xahiş edirik, unutmayın ki, suyun, palçığın, istiliyin və ya günəş işığının təsiri biletinizə zərər verə bilər. Əgər biletin hər hansı bir hissəsi zədələnibsə, sizə tədbirin keçirilmə məkanına daxil olmağa imtina edilə bilər.</p>
   </div>
   <div className='faq_question'>
   <li onClick={() => handleQuestionClick(8)}>9. Biletləri geri qaytarmaq məcburiyyəti olduqda nə etməliyəm?</li>
    <p className={activeIndex === 8 ? 'active' : ''}>Biletlərinizi diqqətlə seçin. Ödəniş biletlərin sifarişi təsdiqləndikdən dərhal sonra həyata keçiriləcək.
Tədbirin baş tutmasına 48 saat və ya daha çox müddət qaldıqda bilet geri qaytarılarsa və ya dəyişdirilərsə, biletin dəyərinin 30%-i tutulur.
Tədbirin baş tutmasına 48 saat və ya daha az müddət qaldıqda bilet geri qaytarılmır və ya dəyişdirilmir.
Biletlərin yenidən satışı qadağandır və biletlərin ləğvi ilə nəticələnə bilər.</p>
   </div>
   <div className='faq_question'>
   <li onClick={() => handleQuestionClick(9)}>10. Tədbir təxirə salınarsa, məkanı dəyişərsə və ya ləğv olunarsa, biletlərimi dəyişə, qaytara bilərəmmi?</li>
    <p className={activeIndex === 9 ? 'active' : ''}>Tədbir təxirə salınarsa və ya məkanı dəyişərsə, biletlərinizin yeni zamana və ya yeni məkana etibarlı olması haqqında məlumatı çağrı mərkəzimizdən əldə edə bilərsiniz.
Yeni tarix və ya məkan sizi qane etmədiyi təqdirdə tədbirin təxirə salınması haqda məlumatın verilməsindən etibarən, 14 gün ərzində biletlərinizi qaytarıb ödənişinizi tutulma olmadan geri ala bilərsiniz. 14 gündən çox müddət keçdikdə "Biletin qaytarılması və dəyişdirilməsi" qaydalarına əsasən, bilet dəyərinin 30%-i tutulur. Tədbirin yeni tarixdə baş tutmasına 48 saat və ya daha az müddət qaldıqda bilet geri qaytarılmır və ya dəyişdirilmir.
Tədbir ləğv olunarsa, sorğunuz əsasında, ödənişiniz tutulma olmadan geri qaytarılacaq.</p>
   </div>
  <div className='faq_question'>
  <li onClick={() => handleQuestionClick(10)}>11. Mən Azərbaycandan kənarda yaşayıram. Bilet ala bilərəm?</li>
    <p className={activeIndex === 10 ? 'active' : ''}>Bəli, ala bilərsiniz. Biletləri istənilən yer və zaman iTicket.AZ veb səhifəmiz və ya mobil əlavəmiz vasitəsilə onlayn əldə edə bilərsiniz.</p>
  </div>
 <div className='faq_question'>
 <li onClick={() => handleQuestionClick(11)}>12. Məkana daxil olmaq üçün nə etməliyəm?</li>
    <p className={activeIndex === 11 ? 'active' : ''}>Məkana daxil olmaq üçün tamaşaçıların etibarlı bileti olmalıdır.
Yaşı 16-dan az olan bilet sahibləri yalnız əlavə bilet və etibarlı şəxsiyyət vəsiqəsi olan böyüklərin (18+) müşayiəti ilə tədbirdə iştirak edə bilərlər.</p>
 </div>
  </ul>
  <ul className='static_sidebar'>
  <Link to='/page/faq' className={location.pathname === '/page/faq' ? 'active' : ''}>Ən çox verilən suallar</Link>
    <Link to='/page/support'>Dəstək</Link>
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

export default FAQ