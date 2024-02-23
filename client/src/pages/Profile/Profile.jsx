
// import React, { useState, useEffect } from 'react';
// import './profile.scss';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import { useParams } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';
// const Profile = () => {
//   const { id } = useParams();
//   const [userData, setUserData] = useState({});

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/users/${id}`);
//         setUserData(response.data); // Assuming response.data contains user data
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, [id]);

//   // Define validation schema using Yup
//   const validationSchema = Yup.object().shape({
//     email: Yup.string().email('Invalid email').required('Email is required'),
//     name: Yup.string().required('Name is required'),
//     surname: Yup.string().required('Surname is required'),
//     number: Yup.string().required('Phone number is required'),
//   });

//   // Initial values set to user's current data
//   const initialValues = {
//     email: userData.email || '',
//     name: userData.name || '',
//     surname: userData.surname || '',
//     number: userData.number || '',
//   };

//   // Function to handle form submission
//   const handleSubmit = async (values, { setSubmitting, setErrors }) => {
//     try {
//       const response = await axios.put(`http://localhost:8000/users/${id}`, values);
//       console.log('Updated user:', response.data);
//       setSubmitting(false);
//       toast.success('Profile edited successful');
//     } catch (error) {
//       console.error('Error updating user:', error);
//       setErrors({ form: 'Failed to update user' });
//       toast.error('Edit failed');
//       setSubmitting(false);
//     }
//   };

//   return (
//     <section className='profile_sec'>
//       <div className='container'>
//         <div className='left'>
//           <h2>Şəxsi məlumatlar</h2>
//           <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={handleSubmit}
//           >
//             {({ isSubmitting }) => (
//               <Form className='edit'>
//                 <div className='form_group'>
//                   <label htmlFor='email'>E-poçt</label>
//                   <Field type='text' id='email' name='email' placeholder={userData.email}/>
//                   <ErrorMessage name='email' component='div' className='error' />
//                 </div>
//                 <div className='form_group'>
//                   <label htmlFor='name'>Ad</label>
//                   <Field type='text' id='name' name='name' placeholder={userData.name}/>
//                   <ErrorMessage name='name' component='div' className='error' />
//                 </div>
//                 <div className='form_group'>
//                   <label htmlFor='surname'>Soyad</label>
//                   <Field type='text' id='surname' name='surname' placeholder={userData.surname}/>
//                   <ErrorMessage name='surname' component='div' className='error' />
//                 </div>
//                 <div className='form_group'>
//                   <label htmlFor='number'>Telefon nömrəsi</label>
//                   <Field type='text' id='number' name='number' placeholder={userData.number}/>
//                   <ErrorMessage name='number' component='div' className='error' />
//                 </div>
//                 <button type='submit' className='edit_btn' disabled={isSubmitting}>
//                   {isSubmitting ? 'Saving...' : 'Dəyişiklikləri yadda saxla'}
//                 </button>
//               </Form>
//             )}
//           </Formik>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Profile;
import React, { useState, useEffect } from 'react';
import './profile.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/users/${id}`);
        setUserData(response.data); // Assuming response.data contains user data
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [id]);

  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    name: Yup.string().required('Name is required'),
    surname: Yup.string().required('Surname is required'),
    number: Yup.string().required('Phone number is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').notRequired(),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').notRequired(),
  });

  // Initial values set to user's current data
  const initialValues = {
    email: userData.email || '',
    name: userData.name || '',
    surname: userData.surname || '',
    number: userData.number || '',
    password:userData.password || '',
    confirmPassword: userData.password || '',
  };

  // Function to handle form submission
  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const { password, confirmPassword, ...userData } = values;
      const updatedUserData = { ...userData };

      if (password) {
        updatedUserData.password = password;
      }

      const response = await axios.put(`http://localhost:8000/users/${id}`, updatedUserData);
      console.log('Updated user:', response.data);
      setSubmitting(false);
      toast.success('Profile edited successful');
    } catch (error) {
      console.error('Error updating user:', error);
      setErrors({ form: 'Failed to update user' });
      toast.error('Edit failed');
      setSubmitting(false);
    }
  };

  return (
    <section className='profile_sec'>
      <div className='container'>
        <div className='left'>
          <h2>Şəxsi məlumatlar</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className='edit'>
                <div className='form_group'>
                  <label htmlFor='email'>E-poçt</label>
                  <Field type='text' id='email' name='email' placeholder={userData.email} />
                  <ErrorMessage name='email' component='div' className='error' />
                </div>
                <div className='form_group'>
                  <label htmlFor='name'>Ad</label>
                  <Field type='text' id='name' name='name' placeholder={userData.name} />
                  <ErrorMessage name='name' component='div' className='error' />
                </div>
                <div className='form_group'>
                  <label htmlFor='surname'>Soyad</label>
                  <Field type='text' id='surname' name='surname' placeholder={userData.surname} />
                  <ErrorMessage name='surname' component='div' className='error' />
                </div>
                <div className='form_group'>
                  <label htmlFor='number'>Telefon nömrəsi</label>
                  <Field type='text' id='number' name='number' placeholder={userData.number} />
                  <ErrorMessage name='number' component='div' className='error' />
                </div>
                <div className='form_group'>
                  <label htmlFor='password'>Şifrə</label>
                  <Field type='password' id='password' name='password' placeholder='Yeni şifrə' />
                  <ErrorMessage name='password' component='div' className='error' />
                </div>
                <div className='form_group'>
                  <label htmlFor='confirmPassword'>Şifrəni təsdiqləyin</label>
                  <Field type='password' id='confirmPassword' name='confirmPassword' placeholder='Təsdiq şifrəsi' />
                  <ErrorMessage name='confirmPassword' component='div' className='error' />
                </div>
                <button type='submit' className='edit_btn' disabled={isSubmitting}>
                  {isSubmitting ? 'Saving...' : 'Dəyişiklikləri yadda saxla'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Profile;


