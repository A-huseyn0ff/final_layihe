import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import "./admin.scss";
import { useNavigate } from "react-router-dom";
import useProduct from "../../hooks/useProduct";


const Admin = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(true);
  const navigate = useNavigate();
  const {data}=useProduct()
  const [selectedCategories, setSelectedCategories] = useState([]);
const [aboutplace, setaboutplace] = useState([])

  const loginAdmin = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/users/login",
        values
      );
      // Check if the user role is admin
      if (response.data.role === "admin") {
        // Redirect to admin panel
        toast.success("Login successful");
        setIsLoginOpen(false);
      }
    } catch (error) {
      console.error(error);
      toast.error("Login failed");
    }
  };


 
  const handleCategoryChange = (event) => {
    const selectedCategory = JSON.parse(event.target.value);
    setSelectedCategories([...selectedCategories, selectedCategory]);
  };
 
  const handleAboutChange = (event) => {
    const { id, value } = event.target;
    setaboutplace(prevState => ({
      ...prevState,
      [id]: value
    }));
  };
  
  

  
  // const handleaddEvent = async (formData) => {
  //   try {
  //     const formattedTime = new Date(formData.get('time'));
  
  //     const values = {
  //       category: selectedCategories,
  //       name: formData.get('name'),
  //       time: formattedTime.toISOString(),
  //       about: formData.get('about'),
  //       aboutplace: JSON.stringify({
  //         iframelink: formData.get('aboutplace.iframelink'),
  //         placename: formData.get('aboutplace.placename'),
  //         placeinfo: formData.get('aboutplace.placeinfo'),
  //       }),
  //       ticketsRemain: formData.get('ticketsRemain'),
  //       mainJPG: formData.get('mainJPG'), // File field
  //       bgImage: formData.get('bgImage'), // File field
  //       detailImage: formData.get('detailImage'), // File field
  //     };
  
  //     const processedFormData = new FormData();
      
  //     Object.entries(values).forEach(([key, value]) => {
  //       processedFormData.append(key, value);
  //     });
  
  //     const response = await axios.post("http://localhost:8000/events", processedFormData);
  
  //     console.log("Event created:", response.data);
  //   } catch (error) {
  //     console.error("Error creating event:", error);
  //   }
  // };
  const handleaddEvent = async (formData) => {
    try {
      const formattedTime = new Date(formData.get('time'));
  
      const values = {
        category: selectedCategories,
        name: formData.get('name'),
        time: formattedTime.toISOString(),
        about: formData.get('about'),
        aboutplace: JSON.stringify(aboutplace), // Pass the entire aboutplace object
        ticketsRemain: formData.get('ticketsRemain'),
        mainJPG: formData.get('mainJPG'), // File field
        bgImage: formData.get('bgImage'), // File field
        detailImage: formData.get('detailImage'), // File field
      };
  
      const processedFormData = new FormData();
      
      Object.entries(values).forEach(([key, value]) => {
        processedFormData.append(key, value);
      });
  
      const response = await axios.post("http://localhost:8000/events", processedFormData);
  
      console.log("Event created:", response.data);
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };
  
  
  
  return (
    <>
      {isLoginOpen ? (
        <div className="admin">
          <div className="adminlogin">
            <span></span>
            <div className="login_up">
              <h2>Admin Login</h2>
            </div>
            <Formik
              initialValues = {{
                email: "",
                password: "",
              }}
              validationSchema={
                
   Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  })
              }
              onSubmit={(values, { setSubmitting }) => {
                loginAdmin(values);
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="login_mid">
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                  <button type="submit" disabled={isSubmitting}>
                    Login
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      ) : (
        <div className="admin_container">
          <div className="admin_nav">
            <div className="logo" onClick={() => navigate("/")}>
              <img
                src="https://asset.brandfetch.io/idAzxb064b/idSwbUn4qo.png"
                alt=""
              />
              <h1>ticket</h1>
            </div>
            <ul className="navigation">
              <li>Products</li>
            </ul>
          </div>
          <div className="admin_right">
<form
  className="event_push"
  enctype="multipart/form-data"
  onSubmit={(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    handleaddEvent(formData);
    e.target.reset();
  }}
>
  <input type="text" id="name" name="name" placeholder="Name" />
  <select name="category" id="category" onChange={handleCategoryChange}>
  {data.map((category) => (
                      <option
                        key={category._id}
                        value={`["${category.categoryName}"]`}
                      >
                        {category.categoryName}
                      </option>
                    ))}
  </select>
  <input type="date" id="time" name="time" placeholder="Time" />
  <input type="text" id="about" name="about" placeholder="About" />
  {/* <input
    type="text"
    id="aboutplace.iframelink"
    name="aboutplace.iframelink"
    placeholder="Iframe Link"
  />
  <input
    type="text"
    id="aboutplace.placename"
    name="aboutplace.placename"
    placeholder="Place Name"
  />
  <input
    type="text"
    id="aboutplace.placeinfo"
    name="aboutplace.placeinfo"
    placeholder="Place Info"
  /> */}
  <input
  type="text"
  id="iframelink"
  name="aboutplace.iframelink"
  placeholder="Iframe Link"
  value={aboutplace.iframelink || ''}
  onChange={handleAboutChange}
/>
<input
  type="text"
  id="placename"
  name="aboutplace.placename"
  placeholder="Place Name"
  value={aboutplace.placename || ''}
  onChange={handleAboutChange}
/>
<input
  type="text"
  id="placeinfo"
  name="aboutplace.placeinfo"
  placeholder="Place Info"
  value={aboutplace.placeinfo || ''}
  onChange={handleAboutChange}
/>

  <h2>Main</h2>
  <input
    id="mainJPG"
    name="mainJPG"
    type="file"
    accept="image/*" 
    onChange={(event) => {
      event.currentTarget.setAttribute(
        "mainJPG",
        event.currentTarget.files[0]
      );
    }}
  />
  <h2>Background image</h2>
  <input
    id="bgImage"
    name="bgImage"
    type="file"
    accept="image/*" 
    onChange={(event) => {
      event.currentTarget.setAttribute(
        "bgImage",
        event.currentTarget.files[0]
      );
    }}
  />
  <h2>Detail image</h2>
  <input
    id="detailImage"
    name="detailImage"
    type="file"
    accept="image/*" 
    onChange={(event) => {
      event.currentTarget.setAttribute(
        "detailImage",
        event.currentTarget.files[0]
      );
    }}
  />
  <input
    type="number"
    id="ticketsRemain"
    name="ticketsRemain"
    placeholder="Tickets Remain"
  />
  <button type="submit">Post</button>
</form>


      

          </div>
        </div>
       )} 
    </>
  );
};

export default Admin;

