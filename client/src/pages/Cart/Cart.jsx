// import React from 'react'
// import './cart.scss'
// const Cart = () => {
//     const [profile, setprofile] = useState([])
//     useEffect(()=>{
//         const fetchprofile=async ()=>{
//           const res=await axios.get('http://localhost:8000/users')
//           setprofile(res.data)
//           }
//           fetchprofile()
//       },[])
//   return (
//   <section className='cart'>
//     <div className='cart_container'>
// <div className='left'>
// <h1>Səbət</h1>
// <span><img src="https://iticket.az/images/warning.svg" alt="" />Səbətinizdə bilet yoxdur.</span>
// </div>
//     </div>
//   </section>
//   )
// }

// export default Cart
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './cart.scss';

const Cart = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('http://localhost:8000/users');
        setProfile(res.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <section className='cart'>
      <div className='cart_container'>
        <div className='left'>
          <h1>Səbət</h1>
          {profile.inBasket && profile.inBasket.length === 0 ? (
            salam
          ) : (
            /* Render something else if profile.inBasket is not empty */
            <span>
              <img src="https://iticket.az/images/warning.svg" alt="" />
              Səbətinizdə bilet yoxdur.
            </span>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;