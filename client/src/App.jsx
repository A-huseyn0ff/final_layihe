import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './MainLayout/MainLayout';
import Home from './pages/Home/Home';
import FAQ from './pages/FAQ/FAQ';
import Support from './pages/Support/Support';
import Rules from './pages/Rules/Rules';
import Eticket from './pages/Eticket/Eticket';
import Privacy from './pages/Privacy/Privacy';
import About from './pages/About/About';
import QDF from './pages/QDF/QDF.JSX';
import Contact from './pages/Contact/Contact';
import Return from './pages/Return/Return';
import PointOfSales from './pages/PointOfSales/PointOfSales';
import All from './pages/Allevents/All';

import ConcertPage from './pages/Concert/Concert';
import TheatrePage from './pages/Theatre/Theatre';
import Detail from './pages/Detail/Detail';
import Profile from './pages/Profile/Profile';
import { useState } from 'react';
import PrivateRoute from './routes/privateRoute';
import Turizm from './components/turizm/Turizm';
import Admin from './pages/Admin/Admin';
import Cart from './pages/Cart/Cart';
function App() {
 
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(""); 
  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/events' element={<All />} />
          <Route path='/events/turizm' element={<Turizm />} />
          <Route path='/events/concerts' element={<ConcertPage />} />
          <Route path='/events/theatre' element={<TheatrePage/>} />
          <Route path='/page/faq' element={<FAQ />} />
          <Route path='/page/rules' element={<Rules />} />
          <Route path='/page/support' element={<Support />} />
          <Route path='/page/privacy' element={<Privacy />} />
          <Route path='/page/about' element={<About />} />
          <Route path='/page/krf' element={<QDF />} />
          <Route path='/page/point-of-sales' element={<PointOfSales />} />
          <Route path='/page/return' element={<Return />} />
          <Route path='/page/contacts' element={<Contact />} />
          <Route path='/page/eticket' element={<Eticket />} />
          <Route path='/detail/:id' element={<Detail />} />
        
          <Route
          path="/profile/:id"
          element={<Profile />}
          isAuthenticated={isAuthenticated}
          userRole={userRole}
        />
       
          {/* <Route path='/profile/:id' element={<Profile />} /> */}
          <Route path='/profile/:id/orders' element={<Cart />}  isAuthenticated={isAuthenticated}
          userRole={userRole}/>
          
        </Route>
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App


