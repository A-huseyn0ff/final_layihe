import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./admin.scss";
import { useNavigate } from "react-router-dom";
import useProduct from "../../hooks/useProduct";

const Admin = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(true);
  const [showAddEventForm, setShowAddEventForm] = useState(false); // State to toggle add event form
  const [showUserTable, setShowUserTable] = useState(false); // State to toggle user table
  const navigate = useNavigate();
  const { data } = useProduct();
  const [showeventtable, setShowEvents] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [aboutplace, setAboutPlace] = useState([]);
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);
  const [openeditmodal, setopeneditmodal] = useState({ id:'', isOpen: false });
  console.log(openeditmodal)
  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
    fetchEvents();
  }, []);

  // Fetch users

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:8000/events");
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  // Delete event
  const deleteEvent = async (eventId) => {
    try {
      await axios.delete(`http://localhost:8000/events/${eventId}`);
      // After successful deletion, update the event list
      fetchEvents();
      toast.success("Event deleted successfully");
    } catch (error) {
      console.error("Error deleting event:", error);
      toast.error("Event is not deleted");
    }
  };

  // Delete user
  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:8000/users/${userId}`);
      // After successful deletion, update the user list
      fetchUsers();
      toast.success("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("User is not deleted");
    }
  };

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
      } else {
        toast.error("You're not Admin");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = JSON.parse(event.target.value);
    setSelectedCategories(selectedCategory); // Update selected category directly
  };
  const handleopen = () => {
    setopeneditmodal(!openeditmodal);
  };

  const handleAboutChange = (event) => {
    const { id, value } = event.target;
    setAboutPlace((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleaddEvent = async (formData) => {
    try {
      const formattedTime = new Date(formData.get("time"));

      const values = {
        category: selectedCategories,
        name: formData.get("name"),
        time: formattedTime.toISOString(),
        about: formData.get("about"),
        aboutplace: aboutplace, // Use the aboutplace state directly
        ticketsRemain: formData.get("ticketsRemain"),
        mainJPG: formData.get("mainJPG"), // File field
        bgImage: formData.get("bgImage"), // File field
        detailImage: formData.get("detailImage"), // File field
      };

      const processedFormData = new FormData();

      Object.entries(values).forEach(([key, value]) => {
        processedFormData.append(key, value);
      });

      const response = await axios.post(
        "http://localhost:8000/events",
        processedFormData
      );
      toast.success("Product added successfully");
      console.log("Event created:", response.data);
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  const toggleAddEventForm = () => {
    setShowAddEventForm(true);
    setShowUserTable(false);
    setShowEvents(false);
  };

  const toggleevents = () => {
    setShowAddEventForm(false);
    setShowEvents(true);
    setShowUserTable(false);
  };

  const toggleUserTable = () => {
    setShowAddEventForm(false);
    setShowUserTable(true);
    setShowEvents(false);
  };
  const editUser = async (userId, updatedUserData) => {
    try {
      const response = await axios.put(
        `http://localhost:8000/users/${userId}`,
        updatedUserData
      );
      fetchUsers();
      toast.success("User updated successfully");
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("User is not updated");
    }
  };

  const handleEditUser = (userId, updatedUserData) => {
    editUser(userId, updatedUserData);
  };

  return (
    <>
      <ToastContainer />
      {isLoginOpen ? (
        <div className="admin">
          <div className="adminlogin">
            <span></span>
            <div className="login_up">
              <h2>Admin Login</h2>
            </div>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Email is required"),
                password: Yup.string().required("Password is required"),
              })}
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
              <li onClick={toggleevents}>
                Events
                <svg
                  viewBox="0 0 88 9"
                  fill="#007bff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m0 5 88-5v4L0 9V5Z"
                    fill="%23FD0"
                    className={showeventtable ? "svg_admin" : "svg"}
                  />
                </svg>
              </li>
              <li onClick={toggleAddEventForm}>
                Add Event
                <svg
                  viewBox="0 0 88 9"
                  fill="#007bff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m0 5 88-5v4L0 9V5Z"
                    fill="%23FD0"
                    className={showAddEventForm ? "svg_admin" : "svg"}
                  />
                </svg>
              </li>
              <li onClick={toggleUserTable}>
                Users
                <svg
                  viewBox="0 0 88 9"
                  fill="#007bff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m0 5 88-5v4L0 9V5Z"
                    fill="%23FD0"
                    className={showUserTable ? "svg_admin" : "svg"}
                  />
                </svg>
              </li>
            </ul>
          </div>
          <div className="admin_right">
            {showAddEventForm && (
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
                <select
                  name="category"
                  id="category"
                  onChange={handleCategoryChange}
                >
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
                <input
                  type="text"
                  id="about"
                  name="about"
                  placeholder="About"
                />

                <input
                  type="text"
                  id="iframelink"
                  name="aboutplace.iframelink"
                  placeholder="Iframe Link"
                  value={aboutplace.iframelink || ""}
                  onChange={handleAboutChange}
                />
                <input
                  type="text"
                  id="placename"
                  name="aboutplace.placename"
                  placeholder="Place Name"
                  value={aboutplace.placename || ""}
                  onChange={handleAboutChange}
                />
                <input
                  type="text"
                  id="placeinfo"
                  name="aboutplace.placeinfo"
                  placeholder="Place Info"
                  value={aboutplace.placeinfo || ""}
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
            )}

            {showUserTable && (
              <div className="user-admin-container">
                <h2>User List</h2>
                <table className="user-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>role</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user._id}>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>
                          <button onClick={() => deleteUser(user._id)}>
                            Delete
                          </button>
                          <button
                            onClick={() =>
                              setopeneditmodal({
                                id: user._id,
                                isOpen: !openeditmodal.isOpen,
                              })
                            }
                          >
                            Edit
                          </button>

                          {openeditmodal.id === user._id &&
                          openeditmodal.isOpen === true ? (
                            <EditUserForm
                              user={user}
                              handleEditUser={handleEditUser}
                            />
                          ) : null}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {showeventtable && (
              <div className="event-list-container">
                <h2>Event List</h2>
                <table className="event-table">
                  <thead>
                    <tr>
                      <th>Mainimg</th>
                      <th>Bgimg</th>
                      <th>Detailimg</th>
                      <th>Name</th>
                      <th>Category</th>
                      <th>Time</th>
                      <th>Action</th>
                      {/* Add more table headers as needed */}
                    </tr>
                  </thead>
                  <tbody>
                    {events.map((event) => {
                      // Parse the ISO string to a Date object
                      const eventDate = new Date(event.time);

                      // Extract day, month, and year
                      const day = eventDate.getDate();
                      const monthIndex = eventDate.getMonth();
                      const year = eventDate.getFullYear();

                      // Array of month names
                      const monthNames = [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December",
                      ];

                      // Format the date string
                      const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;

                      return (
                        <tr key={event._id}>
                          <td>
                            <img src={event.mainJPG} alt="" />
                          </td>
                          <td>
                            <img src={event.bgImage} alt="" />
                          </td>
                          <td>
                            <img
                              src={event.detailImage}
                              alt=""
                              className="detail"
                            />
                          </td>
                          <td>{event.name}</td>
                          <td></td>
                          <td>{formattedDate}</td>
                          {/* Display the formatted date */}

                          <button
                            className="delete-btn"
                            onClick={() => deleteEvent(event._id)}
                          >
                            <i className="fa fa-trash"></i> Delete
                          </button>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
const EditUserForm = ({ user, handleEditUser }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUserData = { name, email }; // Updated user data
    handleEditUser(user._id, updatedUserData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Save</button>
    </form>
  );
};
export default Admin;
