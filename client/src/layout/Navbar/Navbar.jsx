import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import { toast, ToastContainer } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import useCategory from '../../hooks/useCategory';
// import GoogleLogin  from 'react-google-login';
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setprofile] = useState([])
  const location = useLocation();
  const navigate = useNavigate();
  const {category}=useCategory()
useEffect(()=>{
  const fetchprofile=async ()=>{
    const res=await axios.get('http://localhost:8000/users')
    setprofile(res.data)
    }
    fetchprofile()
},[])
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const openLoginModal = () => {
    if (!isLoggedIn) { // Check if user is not logged in
      setIsLoginOpen(true);
      setIsRegisterOpen(false);
    } else {
      // If user is already logged in, close both login and register modals
      setIsLoginOpen(false);
      setIsRegisterOpen(false);
    }
  };
  

  const openRegisterModal = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const loginUser = async (values) => {
    try {
      const response = await axios.post('http://localhost:8000/users/login', values);
     setprofile(response.data) // handle successful login response
      toast.success('Login successful');
     console.log(response.data);
      setIsLoggedIn(true);
      setIsRegisterOpen(false)
      setIsLoginOpen(false)
    } catch (error) {
      console.error(error.response.data); // handle login error
      toast.error('Login failed');
    }
  };

  const registerUser = async (values) => {
    try {
      const response = await axios.post('http://localhost:8000/users/register', values);
      setprofile(response.data)
      console.log(response.data); // handle successful registration response
      toast.success('Registration successful');
      setIsLoggedIn(true);
      setIsRegisterOpen(false)
      setIsLoginOpen(false)
    } catch (error) {
      console.error(error.response.data); // handle registration error
      toast.error('Registration failed');
    }
  };

 
  return (
    <>
    <ToastContainer />
    <nav className={location.pathname === '/' || location.pathname.startsWith('/detail') ? 'nav' : 'nav_active'}>
      <div className='nav_container'>
        <div className='logo' onClick={() => navigate('/')}>
          <img src="https://asset.brandfetch.io/idAzxb064b/idSwbUn4qo.png" alt="" />
          <h1>ticket</h1>
        </div>

        <ul className='navigation'>
             <li><Link to='/events'>Bütün tədbirlər</Link>
             <svg viewBox='0 0 88 9' fill='#ffdd00' xmlns='http://www.w3.org/2000/svg' className={location.pathname === '/events' ? 'svg_active' : ''}>
                 <path d='m0 5 88-5v4L0 9V5Z' fill='%23FD0'/>
               </svg>
            
             </li>
             <li><Link to='/events/concerts'>Konsert</Link>
             <svg viewBox='0 0 88 9' fill='#ffdd00' xmlns='http://www.w3.org/2000/svg'><path d='m0 5 88-5v4L0 9V5Z' fill='%23FD0' className={location.pathname === '/events/concerts' ? 'svg_active' : ''}/></svg></li>
             <li><Link to='/events/theatre'>Tamaşa</Link>
             <svg viewBox='0 0 88 9' fill='#ffdd00' xmlns='http://www.w3.org/2000/svg'><path d='m0 5 88-5v4L0 9V5Z' fill='%23FD0' className={location.pathname === '/events/theatre' ? 'svg_active' : ''}/></svg></li>
             <li><Link to='/events/kids'>Uşaqlar</Link>
             <svg viewBox='0 0 88 9' fill='#ffdd00' xmlns='http://www.w3.org/2000/svg'><path d='m0 5 88-5v4L0 9V5Z' fill='%23FD0' className={location.pathname === '/events/kids' ? 'svg_active' : ''}/></svg></li>
             <li><Link to='/events/hayal-kahvesi'>Hayal Kahvesi</Link>
             <svg viewBox='0 0 88 9' fill='#ffdd00' xmlns='http://www.w3.org/2000/svg'><path d='m0 5 88-5v4L0 9V5Z' fill='%23FD0' className={location.pathname === '/events/hayal-kahvesi' ? 'svg_active' : ''}/></svg></li>
             <li><Link to='/events/sport'>İdman</Link>
             <svg viewBox='0 0 88 9' fill='#ffdd00' xmlns='http://www.w3.org/2000/svg'><path d='m0 5 88-5v4L0 9V5Z' fill='%23FD0' className={location.pathname === '/events/sport' ? 'svg_active' : ''}/></svg></li>
             <li style={{fontSize:'30px',cursor:'pointer'}} onClick={handleDropdownToggle}>...</li>
            {isDropdownOpen && (
              <ul className='dropdown'>
              <li><Link to='/events'>Dream Fest 2024</Link></li>
              <li><Link to='/events/concerts'>Muzey</Link></li>
              <li><Link to='/events/turizm'>Turizm</Link></li>
              <li><Link to='/events/kids'>Seminar</Link></li>
              <li><Link to='/events/hayal-kahvesi'>Master Klass</Link></li>
              <li><Link to='/events/sport'>Digər</Link></li>
              <li><Link>Məhsullar</Link></li>
              <li><Link>360°/VR</Link></li>
              </ul>
            )}

         </ul>

        <ul className='icons'>
         <li> <i className='fa-regular fa-heart'></i>
      </li>
         <li>
         <i className='fa-solid fa-magnifying-glass' onClick={handleSearchToggle}></i>
       
         </li>
         <li> <i className='fa-solid fa-cart-shopping'></i>
         </li>
         <li className='user'><i className='fa-regular fa-user' onClick={openLoginModal}></i>
         {profile ? (
          <ul className={`${isLoggedIn ? 'profile' : 'dn'}`} key={profile._id}>
          <li><Link to={`/profile/${profile._id}`}>Profil</Link></li>
          <li><Link to='/profile/orders'>Mənim sifarişlərim</Link></li>
          <li><Link to='/profile/adresses'>Çatdırılma ünvanları</Link></li>
          <li><Link to='/profile/cards'>Mənim kartlarım</Link></li>
          <li><Link to='/profile/affiliate-program'>Tərəfdaşlıq Proqramı</Link></li>
          <li><Link to='/profile/wallet'>Cüzdan</Link></li>
          <li><Link to='/profile/gift-card'>"iGift" Hədiyyə kartı</Link></li>
          <li><Link to='/profile/password'>Şifrəni yenilə</Link></li>
          
          <li><Link className='exit'>Çıxış
          <svg viewBox="0 0 20 20" fill="#999999" xmlns="http://www.w3.org/2000/svg"><path d="M3.24251 17.4452H9.97012C10.3835 17.4452 10.7176 17.7793 10.7176 18.1927C10.7176 18.6061 10.3835 18.9402 9.97012 18.9402H3.24251C2.00614 18.9402 1 17.9341 1 16.6977V3.24255C1 2.00617 2.00614 1 3.24251 1H9.97012C10.3835 1 10.7176 1.3342 10.7176 1.74756C10.7176 2.16093 10.3835 2.49505 9.97012 2.49505H3.24251C2.82992 2.49505 2.49502 2.82992 2.49502 3.24255V16.6977C2.49502 17.1103 2.82988 17.4452 3.24251 17.4452ZM14.2324 4.95283L18.7773 9.43789C18.92 9.57918 19 9.7698 19 9.97005C19 10.1704 18.9193 10.3618 18.7773 10.5023L14.2324 14.9873C14.0874 15.1309 13.8975 15.2026 13.7076 15.2026C13.5148 15.2026 13.3219 15.1279 13.1754 14.9799C12.8862 14.6861 12.8884 14.2129 13.1829 13.9229L16.4308 10.7176H7.72757C7.3142 10.7176 6.98008 10.3834 6.98008 9.97008C6.98008 9.55672 7.3142 9.22259 7.72757 9.22259H16.4308L13.1829 6.01729C12.8884 5.72725 12.8854 5.25408 13.1754 4.96032C13.4655 4.66655 13.9394 4.66279 14.2324 4.95283Z"></path> <path d="M18.7773 9.43789L18.9531 9.26019L18.9529 9.25994L18.7773 9.43789ZM14.2324 4.95283L14.0565 5.13051L14.0568 5.13077L14.2324 4.95283ZM18.7773 10.5023L18.9529 10.6802L18.9531 10.68L18.7773 10.5023ZM14.2324 14.9873L14.0568 14.8094L14.0565 14.8097L14.2324 14.9873ZM13.1754 14.9799L12.9973 15.1553L12.9977 15.1558L13.1754 14.9799ZM13.1829 13.9229L13.3583 14.101L13.3585 14.1009L13.1829 13.9229ZM16.4308 10.7176L16.6064 10.8955L17.0401 10.4676H16.4308V10.7176ZM16.4308 9.22259V9.47259H17.0401L16.6064 9.04465L16.4308 9.22259ZM13.1829 6.01729L13.3585 5.83935L13.3583 5.83916L13.1829 6.01729ZM9.97012 17.1952H3.24251V17.6952H9.97012V17.1952ZM10.9676 18.1927C10.9676 17.6413 10.5216 17.1952 9.97012 17.1952V17.6952C10.2454 17.6952 10.4676 17.9174 10.4676 18.1927H10.9676ZM9.97012 19.1902C10.5216 19.1902 10.9676 18.7441 10.9676 18.1927H10.4676C10.4676 18.468 10.2454 18.6902 9.97012 18.6902V19.1902ZM3.24251 19.1902H9.97012V18.6902H3.24251V19.1902ZM0.75 16.6977C0.75 18.0721 1.86807 19.1902 3.24251 19.1902V18.6902C2.14421 18.6902 1.25 17.796 1.25 16.6977H0.75ZM0.75 3.24255V16.6977H1.25V3.24255H0.75ZM3.24251 0.75C1.86806 0.75 0.75 1.86811 0.75 3.24255H1.25C1.25 2.14424 2.14421 1.25 3.24251 1.25V0.75ZM9.97012 0.75H3.24251V1.25H9.97012V0.75ZM10.9676 1.74756C10.9676 1.19615 10.5216 0.75 9.97012 0.75V1.25C10.2454 1.25 10.4676 1.47224 10.4676 1.74756H10.9676ZM9.97012 2.74505C10.5216 2.74505 10.9676 2.299 10.9676 1.74756H10.4676C10.4676 2.02286 10.2454 2.24505 9.97012 2.24505V2.74505ZM3.24251 2.74505H9.97012V2.24505H3.24251V2.74505ZM2.74502 3.24255C2.74502 2.968 2.96798 2.74505 3.24251 2.74505V2.24505C2.69185 2.24505 2.24502 2.69184 2.24502 3.24255H2.74502ZM2.74502 16.6977V3.24255H2.24502V16.6977H2.74502ZM3.24251 17.1952C2.96796 17.1952 2.74502 16.9723 2.74502 16.6977H2.24502C2.24502 17.2484 2.6918 17.6952 3.24251 17.6952V17.1952ZM18.9529 9.25994L14.408 4.77488L14.0568 5.13077L18.6016 9.61583L18.9529 9.25994ZM19.25 9.97005C19.25 9.70256 19.143 9.4481 18.9531 9.26019L18.6014 9.61558C18.6971 9.71026 18.75 9.83704 18.75 9.97005H19.25ZM18.9531 10.68C19.1421 10.493 19.25 10.2378 19.25 9.97005H18.75C18.75 10.103 18.6964 10.2306 18.6014 10.3246L18.9531 10.68ZM14.408 15.1653L18.9529 10.6802L18.6016 10.3243L14.0568 14.8094L14.408 15.1653ZM13.7076 15.4526C13.9604 15.4526 14.2144 15.3569 14.4083 15.165L14.0565 14.8097C13.9604 14.9048 13.8346 14.9526 13.7076 14.9526V15.4526ZM12.9977 15.1558C13.1927 15.3527 13.4502 15.4526 13.7076 15.4526V14.9526C13.5794 14.9526 13.4511 14.9031 13.3531 14.804L12.9977 15.1558ZM13.0075 13.7448C12.6142 14.1321 12.6116 14.7636 12.9973 15.1553L13.3536 14.8045C13.1607 14.6086 13.1626 14.2938 13.3583 14.101L13.0075 13.7448ZM16.2552 10.5397L13.0073 13.745L13.3585 14.1009L16.6064 10.8955L16.2552 10.5397ZM7.72757 10.9676H16.4308V10.4676H7.72757V10.9676ZM6.73008 9.97008C6.73008 10.5215 7.17612 10.9676 7.72757 10.9676V10.4676C7.45229 10.4676 7.23008 10.2454 7.23008 9.97008H6.73008ZM7.72757 8.97259C7.17613 8.97259 6.73008 9.41864 6.73008 9.97008H7.23008C7.23008 9.69479 7.45227 9.47259 7.72757 9.47259V8.97259ZM16.4308 8.97259H7.72757V9.47259H16.4308V8.97259ZM13.0073 6.19523L16.2552 9.40053L16.6064 9.04465L13.3585 5.83935L13.0073 6.19523ZM12.9975 4.78467C12.6104 5.17672 12.6144 5.80835 13.0075 6.19542L13.3583 5.83916C13.1623 5.64615 13.1603 5.33145 13.3533 5.13596L12.9975 4.78467ZM14.4083 4.77515C14.0165 4.38736 13.3841 4.3931 12.9975 4.78467L13.3533 5.13596C13.5468 4.94 13.8622 4.93821 14.0565 5.13051L14.4083 4.77515Z"></path></svg></Link></li>

          </ul>
         ):<></>}
         </li>
        </ul>
      </div>
      {/* <div className={isSearchOpen ? 'modal_overlay open' : 'modal_overlay close' }>
           <div className='search_con'>
           <div className='search'>
           
           <input
              type="text"
              placeholder="Axtar"
             className='search'
             value={searchInput}
             onChange={handleSearchInputChange}
            />
             <i className="fa-solid fa-xmark register" onClick={() => { setIsSearchOpen(false) }}></i>
           </div>
           <div className='res' >
           <h2>Tədbirlər</h2>
           {category
        .filter((item) =>
          item.name.toLowerCase().includes(searchInput.toLowerCase())
        )
        .map((filteredItem) => (
          <>
         
            <Link to={`/detail/${filteredItem._id}`} onClick={() => { setIsSearchOpen(false) }}>{filteredItem.name}</Link>
            </>
        ))
        }
        </div>
           </div>
          </div> */}
          <div className={isSearchOpen ? 'modal_overlay open' : 'modal_overlay close'}>
  <div className='search_con'>
    <div className='search'>
      <input
        type="text"
        placeholder="Axtar"
        className='search'
        value={searchInput}
        onChange={handleSearchInputChange}
      />
      <i className="fa-solid fa-xmark register" onClick={() => { setIsSearchOpen(false) }}></i>
    </div>
    <div className='res'>
      <h2>Tədbirlər</h2>
      {/* {category
        .filter((item) =>
          item.name.toLowerCase().includes(searchInput.toLowerCase())
        )
        .map((filteredItem) => (
          <Link to={`/detail/${filteredItem._id}`} onClick={() => { setIsSearchOpen(false) }}>
            {Array.from(filteredItem.name).map((letter, index) => (
              <b key={index} className={searchInput.toLowerCase().includes(letter.toLowerCase()) ? 'highlight' : ''}>
                {letter}
              </b>
             
            ))}
          </Link>
        ))} */}
       {category
  .filter((item) =>
    item.name && typeof item.name === 'string' && item.name.toLowerCase().includes(searchInput.toLowerCase())
  )
  .map((filteredItem) => (
    <Link to={`/detail/${filteredItem._id}`} onClick={() => { setIsSearchOpen(false) }}>
      {filteredItem.name && typeof filteredItem.name === 'string' && Array.from(filteredItem.name).map((letter, index) => (
        <b key={index} className={searchInput.toLowerCase().includes(letter.toLowerCase()) ? 'highlight' : ''}>
          {letter}
        </b>
      ))}
    </Link>
  ))}


    </div>
  </div>
</div>

      {/* Login/Register Modal */}
      <div className={isLoginOpen || isRegisterOpen ? 'modal_overlay open' : 'modal_overlay close' }>
        <div className='login'>
          <span></span>
          <div className='login_up'>
            <h2>{isLoginOpen ? 'Daxil Ol' : 'Qeydiyyat'}</h2>
            <div className='btn'>
              <button className='facebook'><i className="fa-brands fa-facebook-f"></i></button>
              <button className='google'><i className="fa-brands fa-google"></i></button>
            </div>
          </div>
          <Formik
            initialValues={{ email: '', password: '', name: '', surname: '', number: '' }}
            validationSchema={isLoginOpen ? loginValidationSchema : registerValidationSchema}
            onSubmit={(values, { resetForm }) => {
              if (isLoginOpen) {
                loginUser(values);
              } else {
                registerUser(values);
              }
              resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Form className='login_mid'>
                {isLoginOpen ? (
                  <>
                    <Field type="email" name="email" placeholder='E-poçt' />
                    <ErrorMessage name="email" component="div" className="error" />
                    <Field type="password" name="password" placeholder='Şifrə' />
                    <ErrorMessage name="password" component="div" className="error" />
                    <button type="submit" disabled={isSubmitting}>Daxil Ol</button>
                  </>
                ) : (
                  <>
                    <Field type="text" name="name" placeholder='Ad' />
                    <Field type="text" name="surname" placeholder='Soyad' />
                    <Field type="text" name="number" placeholder='Mobil' />
                    <Field type="email" name="email" placeholder='E-poçt' />
                    <ErrorMessage name="email" component="div" className="error" />
                    <Field type="password" name="password" placeholder='Şifrə' />
                    <ErrorMessage name="password" component="div" className="error" />
                    <Field type="password" name="confirmPassword" placeholder='Şifrəni təsdiqləyin' />
                    <ErrorMessage name="confirmPassword" component="div" className="error" />
                    <button type="submit" disabled={isSubmitting}>Qeydiyyat</button>
                  </>
                )}
              </Form>
            )}
          </Formik>
          {/* <GoogleLogin
              clientId="YOUR_CLIENT_ID" // Replace with your actual Client ID
              buttonText="Sign up with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            /> */}
          <h5>
            {isLoginOpen ? 'iTicket.AZ-da yenisiniz? ' : 'Artıq qeydiyyatdan keçmisiniz? '}
            {isLoginOpen ? <h4 onClick={openRegisterModal}>Qeydiyyatdan keçin</h4> : <h4 onClick={openLoginModal}>Daxil olun</h4>}
          </h5>
        </div>
        <i className="fa-solid fa-xmark register" onClick={() => { setIsLoginOpen(false); setIsRegisterOpen(false); }}></i>
      </div>
    </nav>
    </>
  );
};

// Validation schema for login form
const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

// Validation schema for registration form
const registerValidationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  surname: Yup.string().required('Surname is required'),
  number: Yup.string().required('Mobile number is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation is required'),
});

export default Navbar;

