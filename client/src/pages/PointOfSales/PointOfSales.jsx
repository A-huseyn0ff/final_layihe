import React, { useState } from 'react'
import './pointofsales.scss'
import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
const PointOfSales = () => {
    const location=useLocation()
    const [iframeSrc, setIframeSrc] = useState('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1560997.7208329546!2d46.43292509924786!3d40.168479439199444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307cd91aa21ddf%3A0xe6c9526b3e83cd08!2sAzerbaijan!5e0!3m2!1sen!2saz!4v1707317711518!5m2!1sen!2saz')
    const handleIframeChange = (newSrc) => {
        setIframeSrc(newSrc);
    };
  return (
    <>
    <Helmet>
<title>Biletlərin Satış Məntəqələri | iTicket.AZ — Biletlərin onlayn satışı</title>
    </Helmet>
     <section className='pointofsales'>
        <div className='container'>
            <h2>Biletlərin Satış Məntəqələri</h2>
            <div className='row'>
          <div className='pointofsales_div'>
           <ul className='static_content'>
            <li>
                <a onClick={()=>handleIframeChange('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.4168698872772!2d49.84122826498073!3d40.37745255773719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da431270ccf%3A0xd1c2b3e9a7748f50!2sHeydar%20Aliyev%20Palace!5e0!3m2!1sen!2saz!4v1707222353595!5m2!1sen!2saz')}>Heydər Əliyev Sarayı</a>
                <br />
                <span>
                Bül-Bül pr.35., Bakı
<br/>
(+99412) 493-33-77
<br/>
11:00 - 19:00
                </span>
            </li>
            <li>
            <a onClick={()=>handleIframeChange('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.539216626148!2d49.842776612402666!3d40.37474037132726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307daf1120da8b%3A0xc9b55ae565bd4ea1!2zQXrJmXJiYXljYW4gRMO2dmzJmXQgQWthZGVtaWsgT3BlcmEgdsmZIEJhbGV0IFRlYXRyxLE!5e0!3m2!1sen!2saz!4v1707222990267!5m2!1sen!2saz')}>Azərbaycan Dövlət Akademik Opera və Balet Teatrı</a>
                <br />
                <span>
                Bakı, Nizami küç.95
<br/>
(+99412) 493-31-88
<br/>
11:00 - 19:00
                </span>
            </li>
            <li>
            <a onClick={()=>handleIframeChange('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.0216378095733!2d49.829097412402085!3d40.36404457132898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dcbbf828fc1%3A0xaf76d8e132d1fd5a!2sBaku%20State%20Philharmonic%20Hall!5e0!3m2!1sen!2saz!4v1707223132284!5m2!1sen!2saz')}>Azərbaycan Dövlət Akademik Filarmoniyası</a>
                <br />
                <span>
                Bakı, İstiqlaliyət küç.10
<br/>
(+99412) 497-36-09
<br/>
11:00 - 19:00
                </span>
            </li>
            <li>
            <a onClick={()=>handleIframeChange('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1519.9078416565333!2d49.8392654567946!3d40.36861109283216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307db3f1e3ed7d%3A0xacfbd42970e5ca90!2sAzerbaijan%20State%20Academic%20Musical%20Theatre!5e0!3m2!1sen!2saz!4v1707298748679!5m2!1sen!2saz')}>Azərbaycan Dövlət Musiqili Komediya Teatrı</a>
                <br />
                <span>
                Bakı, Zərifə Əliyeva küç.8
<br/>
(+99412) 598-49-17
<br/>
11:00 - 19:00
                </span>
            </li>
            <li>
            <a onClick={()=>handleIframeChange('https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d957.4820039413802!2d49.837088614492124!3d40.36860300615944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSabir%20bagi!5e0!3m2!1sen!2saz!4v1707223579140!5m2!1sen!2saz')}>Köşk №1</a>
                <br />
                <span>
                M.Rəsulzadə 3., Bakı,
<br/>
(+99412) 598-17-72
<br/>
11:00 - 20:00
                </span>
            </li>
            <li>
            <a onClick={()=>handleIframeChange('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903.6667258698786!2d49.84282445371814!3d40.37427262683413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dafb0584821%3A0x8d1190b031eb376e!2zQsO8bGLDvGwgUHJvc3Bla3RpICYgTml6YW1pIEvDvMOnyZlzaSwgQmFrxLE!5e0!3m2!1sen!2saz!4v1707298932295!5m2!1sen!2saz')}>Köşk №2</a>
                <br />
                <span>
                Bül-bül prospekti, Nizami küç., Bakı
<br/>
(+99412) 598-17-74
<br/>
10:00 - 19:00
                </span>
            </li>
            <li>
            <a onClick={()=>handleIframeChange('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.3494313895244!2d49.87761624812354!3d40.37894747196408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307ce18ded13db%3A0x5a5bd745e5e0ba7a!2sBaku%20%E2%80%9CASAN%20service%E2%80%9D%20center%20No.2!5e0!3m2!1sen!2saz!4v1707299068725!5m2!1sen!2saz')}>2 saylı "ASAN xidmət” mərkəzi</a>
                <br />
                <span>
                8 Noyabr prospekti 23, AMAY T.M 2-ci mərtəbəsi, Bakı
<br/>
(+99477) 600-00-60
<br/>
9:00-18:00
                </span>
            </li>
            <li>
            <a onClick={()=>handleIframeChange('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.3935845434944!2d49.850364312403414!3d40.400130871323185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d5d5a2c1005%3A0x5ede1cc1418ccc54!2sGanjlik%20Mall!5e0!3m2!1sen!2saz!4v1707299138075!5m2!1sen!2saz')}>"Gənclik Mall" Ticarət Mərkəzi</a>
                <br />
                <span>
                Fətəli Xan Xoyski 38, Bakı
<br/>
(+99412) 599 15 60
<br/>
10:00 - 22:00
                </span>
            </li>
            <li>
            <a onClick={()=>handleIframeChange('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.4436266162415!2d49.83245851240345!3d40.39902207132331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d7cd4d9b51d%3A0xc5033e54afd8f8f!2sBaku%20%E2%80%9CASAN%20service%E2%80%9D%20center%20No.1!5e0!3m2!1sen!2saz!4v1707299244639!5m2!1sen!2saz')}>1 saylı "ASAN xidmət” mərkəzi</a>
                <br />
                <span>
                Həsən Əliyev küç.36, Bakı
<br/>
(+99477) 600-00-60
<br/>
9:00-18:00
                </span>
            </li>
            <li>
            <a onClick={()=>handleIframeChange('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.3473111230232!2d49.80159531240267!3d40.37899447132665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307df206d8c7a7%3A0x5c02d6a3a17a28ea!2sBaku%20%E2%80%9CASAN%20service%E2%80%9D%20center%20No.3!5e0!3m2!1sen!2saz!4v1707299325835!5m2!1sen!2saz')}>3 saylı "ASAN xidmət” mərkəzi</a>
                <br />
                <span>
                Abbas Mirzə Şərifzadə 157, Yasamal, Bakı
<br/>
(+99477) 600-00-60
<br/>
9:00-18:00
                </span>
            </li>
            <li>
            <a onClick={()=>handleIframeChange('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.333396070741!2d49.8445868124027!3d40.37930292132652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da7a06b402f%3A0xd8897cf79ec36111!2s28%20Mall!5e0!3m2!1sen!2saz!4v1707299525814!5m2!1sen!2saz')}>"28 Mall" Ticarət Mərkəzi</a>
                <br />
                <span>
                33 28 May Küçəsi, Bakı
<br/>
(+99412) 499 87 79
<br/>
10:00 - 22:00
                </span>
            </li>
            <li>
            <a onClick={()=>handleIframeChange('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.928497674134!2d49.66237801241057!3d40.58733367129333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403096c2a694d07b%3A0x2a49b82d222a8e9c!2sSumqay%C4%B1t%20ASAN%20xidm%C9%99t!5e0!3m2!1sen!2saz!4v1707299892619!5m2!1sen!2saz')}>Sumqayıt "ASAN xidmət" mərkəzi</a>
                <br />
                <span>
                Bakı 15-ci məhəllə 42d, Sumqayıt
<br/>
(+99477) 600 00 60
<br/>
9:00-18:00
                </span>
            </li>
            <li>
            <a onClick={()=>handleIframeChange('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.4523578584503!2d49.96663751240429!3d40.42098127131975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030624b92534a81%3A0x77a36a2aaeac20fc!2sBaku%20%E2%80%9CASAN%20service%E2%80%9D%20center%20No.4!5e0!3m2!1sen!2saz!4v1707299949475!5m2!1sen!2saz')}>4 saylı "ASAN xidmət” mərkəzi</a>
                <br />
                <span>
                Sülh 197, Bakıxanov, Sabunçu, Bakı
<br/>
(+99477) 600-00-60
<br/>
9:00-18:00
                </span>
            </li>
            <li>
            <a onClick={()=>handleIframeChange('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.512703387121!2d49.86287181240347!3d40.39749147132361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d412c43d539%3A0x294c20fed11538be!2sBaku%20Congress%20Centre!5e0!3m2!1sen!2saz!4v1707300003078!5m2!1sen!2saz')}>Bakı Konqres Mərkəzi</a>
                <br />
                <span>
                Təbriz Küçəsi
<br/>
+994776000060
<br/>
11:00-20:00
                </span>
            </li>
            <li>
            <a onClick={()=>handleIframeChange('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1104.0405641107343!2d49.890470343774425!3d40.5017829985498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40308bc96eeb890d%3A0x8e50f400b061633b!2sYanar%20da%C4%9F!5e0!3m2!1sen!2saz!4v1707300360710!5m2!1sen!2saz')}>“Yanardağ” Təbiət Qoruğu (yalnız məkana giriş biletləri)</a>
                <br />
                <span>
                Məmmədli-Digah şossesi
<br/>
(012) 459 14 37
<br/>
10:00 - 22:00
                </span>
            </li>
            <li>
            <a onClick={()=>handleIframeChange('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.750198474573!2d47.19062121243561!3d41.248998971198205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4047898092916e27%3A0x1cfc23ff3e068cc0!2sKish%20Albanian%20Temple!5e0!3m2!1sen!2saz!4v1707315556623!5m2!1sen!2saz')}>"Kiş Alban Məbədi" (yalnız məkana giriş biletləri)</a>
                <br />
                <span>
                Füzuli, Şəki 5500
<br/>
09:00 - 19:00
                </span>
            </li>
            <li>
            <a onClick={()=>handleIframeChange('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.796515670789!2d47.195048812434024!3d41.204409671204125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40478771c4b107d3%3A0x8c750e86430aeb81!2s%C5%9E%C9%99ki%20Xan%20Saray%C4%B1%20(The%20Palace%20of%20Shaki%20Khans)!5e0!3m2!1sen!2saz!4v1707315644968!5m2!1sen!2saz')}>"Şəki Xan Sarayı" (yalnız məkana giriş biletləri)
</a>
                <br />
                <span>
                Mirzə Fətəli Axundov, Şəki, AZ5503
<br/>
09:00 - 19:00
                </span>
            </li>
            <li>
            <a onClick={()=>handleIframeChange('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6003.755119780674!2d47.18334804558618!3d41.2026429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404787dd5e88f425%3A0xeca479e6b18912fe!2sShakikhanovs&#39;%20Palace!5e0!3m2!1sen!2saz!4v1707317423699!5m2!1sen!2saz')}>"Şəkixanovlar evi" (yalnız məkana giriş biletləri)
</a>
                <br />
                <span>
                Şəki şəhəri, Hikmət Ələkbərzadə küçəsi, 21
<br/>
09:00 - 19:00
                </span>
            </li>
            <li>
            <a onClick={()=>handleIframeChange('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.6003528211836!2d50.16668026240501!3d40.43984752131675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40305db8c59c6d91%3A0xc520b7796c4534fb!2sQala%20Qoru%C4%9Fu!5e0!3m2!1sen!2saz!4v1707317498358!5m2!1sen!2saz')}>“Qala” Dövlət Tarix Etnoqrafiya Qoruğu (yalnız məkana giriş biletləri)
</a>
                <br />
                <span>
                Bakı şəhəri, Xəzər rayonu, Qala qəsəbəsi, Sülh küçəsi 83
<br/>
(012) 459 14 37
<br/>
09:00 - 18:00
                </span>
            </li>
            <li>
            <a onClick={()=>handleIframeChange('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.2215343826697!2d49.8393662124011!3d40.33743137133342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307fb1394725a3%3A0xc7bf5d5f606cac01!2s%22SURAKHANI%22%20SHIP-MUSEUM!5e0!3m2!1sen!2saz!4v1707317558775!5m2!1sen!2saz')}>"Suraxanı" gəmi-muzey (yalnız məkana giriş biletləri)
</a>
                <br />
                <span>
                Salyan şossesi, Bakı, AZ 1083
<br/>
+994 12 444 99 00
<br/>
10:00 / 21:00
</span>
            </li>
            <li>
            <a onClick={()=>handleIframeChange('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7881.704429080703!2d49.84886408822843!3d40.39085279971283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6e776f0db9%3A0x651c38c5ad8b8933!2sBaku%20Zoological%20Park!5e0!3m2!1sen!2saz!4v1707317646415!5m2!1sen!2saz')}>Zoo (yalnız məkana giriş biletləri)
</a>
                <br />
                <span>
                Bakı,Nərimanov r-nu, Bakıxanov küç., 29
<br/>
+99477 600 00 60
<br/>
09:00 -17:30
</span>
            </li>
           </ul>
           
           <iframe src={iframeSrc} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           
          </div>
                <ul className='static_sidebar'>
  <Link to='/page/faq' >Ən çox verilən suallar</Link>
    <Link to='/page/support' >Dəstək</Link>
    <Link to='/page/rules' >Şərtlər və Qaydalar</Link>
    <Link to='/page/eticket' >Elektron bilet</Link>
    <Link to='/page/return'>Biletin qaytarılması və dəyişdirilməsi</Link>
    <Link to='/page/privacy' >Məxfilik</Link>
    <Link to='/page/about'>Haqqımızda</Link>
    <Link to='/page/point-of-sales' className={location.pathname === '/page/point-of-sales' ? 'active' : ''}>Biletlərin Satış Məntəqələri</Link>
    <Link to='/page/krf'>Qarabağ Dirçəliş Fondu</Link>
    <Link to='/page/contacts'>Əlaqə</Link>
  </ul>
            </div>
          
        </div>
    </section>
    </>
  )
}

export default PointOfSales