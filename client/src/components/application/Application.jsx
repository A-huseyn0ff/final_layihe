import React from 'react'
import './Application.scss'
const Application = () => {
  return (
   <section className='application'>
    <div className='container'>
        <div className='txt'>
        <h2>NÖVBƏTİ VİZUAL SƏYAHƏTİNİZİ TAPIN</h2>
        <p>iTicket.AZ tətbiqi bütün növ tədbirlərə (teatr, idman, konsertlər, sərgilər və s.) biletləri əldə etməyi asan və sürətli edir.</p>
        <a href="https://apps.apple.com/az/app/iticket-az/id1456260325" className='app'>
            <img src="https://iticket.az/images/android.png" alt="" className='border'/>
           
            <img src="https://iticket.az/images/ios.png" alt="" />
        </a>
        </div>

        <img src="https://cdn.iticket.az/images/app.png" alt="" className='JAH'/>
        <marquee behavior="scroll" direction="right" loop="-1"  >
    İNDİ YÜKLƏ İNDİ YÜKLƏ İNDİ YÜKLƏ İNDİ YÜKLƏ 
</marquee>
    </div>
   </section>
  )
}

export default Application