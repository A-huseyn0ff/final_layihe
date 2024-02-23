import React from 'react'
import { Link } from 'react-router-dom'
import './qdf.scss'
import { Helmet } from 'react-helmet'
const QDF = () => {
  return (
    <>
    <Helmet>
<title>Qarabağ Dirçəliş Fondu | iTicket.AZ — Biletlərin onlayn satışı</title>
    </Helmet>
    <section className='qdf'>
        <div className='container'>
        <h2>Qarabağ Dirçəliş Fondu</h2>
            <div className='row'>
                <div className='qdf_con'>
                    <b>“iTicket.az” və Qarabağ Dirçəliş Fondu arasında əməkdaşlıq haqqında razılaşma əldə olunub.</b>
                    <br />
                    <span>Razılaşmanın əsas məqsəd və vəzifəsi birgə layihə və tədbirlərin həyata keçirilməsi ilə erməni işğalından azad edilmiş ərazilərin inkişaf edən regiona çevrilməsi prosesinə yardım etməkdir.</span>
                    <br />
                    <span>6 illik fəaliyyəti müddətində “iTicket.az” biznesin korporativ sosial məsuliyyətinin əsas prinsiplərinə müvəffəqiyyətlə əməl edərək, şirkətin əsas fəaliyyəti ilə bilavasitə bağlı olan sosial, iqtisadi və ekoloji sahədə Azərbaycan cəmiyyətinin inkişafına könüllü töhfə verir.</span>
                    <br />
                    <span>“iTicket.az” ilə Qarabağ Dirçəliş Fondu arasında əməkdaşlıq 2022-ci ilin yayında Mədəniyyət Nazirliyinin təşkilati dəstəyilə, eləcə də fondun təşəbbüsü və təşkilatçılığı ilə Azərbaycan Dövlət Akademik Filarmoniyasında keçirilmiş “Qarabağ gecəsi” xeyriyyə konsertindən başlayıb. Layihə çərçivəsində iTicket.az tədbirə biletlərin satışını həyata keçirib. Konsertdən toplanmış vəsaitlər işğaldan azad edilmiş ərazilərin bərpası və yenidən qurulması, eləcə də dayanıqlı iqtisadiyyata və yüksək rifaha malik regiona çevrilməsi, həmçinin həmin ərazilərdəki ekoloji tarazlığın bərpa olunması istiqamətində həyata keçirilən tədbirlərə yönəldilib.</span>
                    <br />
                    <span>Uğurlu başlanğıcdan sonra iTicket.az ilə Qarabağ Dirçəliş Fondu arasında əməkdaşlıq davam edərək birgə layihə ilə nəticələndi. Bu layihə çərçivəsində hər kəs işğaldan azad edilmiş ərazilərin bərpasına öz töhfəsini verə bilər. Bu, saytda xüsusi funksiyanın işə salınmasından sonra mümkün oldu. Belə ki, artıq təqdim olunan hər hansı tədbirə bilet əldə etməklə Qarabağ Dirçəliş Fonduna istədiyiniz məbləğdə ianə edə bilərsiniz. Biletlərin alınması və ianə prosesi cəmi bir neçə kliklə həyata keçirilir və vəsait dərhal fondun hesabına yönləndirilir.</span>
                    <br />
                    <span>“iTicket.az” ilə Qarabağ Dirçəlişi Fondu arasında əldə olunmuş razılaşmanın əsasını məhz bu məsələ təşkil edir. Bu da öz növbəsində innovativ texniki imkanlardan istifadə etməklə Azərbaycanda xeyriyyəçilik mədəniyyətinin təbliğinə mühüm töhfə verəcək.</span>
                    <br />
                    <span>iTicket.az saytından hər hansı tədbirə bilet əldə etdikdə, istəyinizə uyğun olaraq, işğaldan azad edilmiş ərazilərin bərpası və dirçəlişi üzrə məsul missiyaya dəstək ola bilərsiniz. Etdiyiniz hər bir ianə Qarabağın dirçəlişinə əhəmiyyətli töhfə olacaq.</span>
                    <br />
                    <span>
Qarabağ Dirçəliş Fondu və “iTicket.az” ilə birlikdə Qarabağı bərpa edin və onu daha da gözəlləşdirin!</span>
                </div>
            <ul className='static_sidebar'>
  <Link to='/page/faq' >Ən çox verilən suallar</Link>
    <Link to='/page/support' >Dəstək</Link>
    <Link to='/page/rules' >Şərtlər və Qaydalar</Link>
    <Link to='/page/eticket' >Elektron bilet</Link>
    <Link to='/page/return'>Biletin qaytarılması və dəyişdirilməsi</Link>
    <Link to='/page/privacy' >Məxfilik</Link>
    <Link to='/page/about'>Haqqımızda</Link>
    <Link to='/page/point-of-sales'>Biletlərin Satış Məntəqələri</Link>
    <Link to='/page/krf' className={location.pathname === '/page/krf' ? 'active' : ''}>Qarabağ Dirçəliş Fondu</Link>
    <Link to='/page/contacts'>Əlaqə</Link>
  </ul>
            </div>
        </div>
    </section>
    </>
  )
}

export default QDF