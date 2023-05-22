import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import axios from 'axios';
import Login from './Login';
import Signup from './Signup';
import Donation from './Donation';
import CreateFoodItem from './CreateFoodItem';
import imageSrc from './home.jpg';
import imageSrc1 from './profile.png';
import './App.css';

function Home() {
  return (
    <div>
      <h2 style={{ fontSize: '40px', textAlign: 'center' }}>Home</h2>
      <p style={{ fontSize: '20px', textAlign: 'center' }}>Welcome To The Food Sharing Platform!</p>
      <p style={{ fontSize: '20px', textAlign: 'center' }}>We Share More Than Just A Meal; We Share Stories, Laughter, And Love</p>
      <img src={imageSrc} alt="Description of the image" width="800" height="250" style={{ display: 'block', margin: '0 auto' }} />
      <p style={{ fontSize: '20px', textAlign: 'center' }}>contact  : cutomer-care@gmail.com</p>
      <p style={{ fontSize: '20px', textAlign: 'center' }}>telephone: 123-456-7890</p>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users/')
      .then((response) => setUsers(response.data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h2 style={{ fontSize: '40px', textAlign: 'center' }}>Profile</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
      <img src={imageSrc1} alt="Description of the image" width="200" height="200" style={{ display: 'block', margin: '0 auto' }} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to="/users/create" >Update profile</Link>
      </div>
    </div>
  );
}

function CreateUser() {
  const [userDetails, setUserDetails] = useState({
    username: 'JohnDoe',
    firstName: 'John',
    lastName: 'Doe',
    middleName: 'Smith',
    password: '********',
    dateOfBirth: '1990-01-01',
    address: '123 Main St, City',
    email: 'johndoe@example.com',
    phoneNumber: '123-456-7890',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can send the updated user details to the server using an API call here
    // For simplicity, we're just logging the updated details to the console
    console.log('Updated User Details:', userDetails);
    // Reset the form or perform any necessary actions after submission
    setUserDetails({
      username: '',
      firstName: '',
      lastName: '',
      middleName: '',
      password: '',
      dateOfBirth: '',
      address: '',
      email: '',
      phoneNumber: '',
    });
  };

  return (
    <div className="profile-container">
      <div className="profile-form-wrapper">
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" value={userDetails.username} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" value={userDetails.firstName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={userDetails.lastName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="middleName">Middle Name:</label>
            <input type="text" id="middleName" name="middleName" value={userDetails.middleName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={userDetails.password} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input type="date" id="dateOfBirth" name="dateOfBirth" value={userDetails.dateOfBirth} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" value={userDetails.address} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={userDetails.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" value={userDetails.phoneNumber} onChange={handleChange} />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
        <h1 className="header" style={{ fontSize: '45px', textAlign: 'center' }} >Food Sharing Platform</h1>
        <nav>
          <ul>
            <li>
              <Link to="/" style={{ fontSize: '20px', textAlign: 'center' }}>Home</Link>
            </li>
            {isLoggedIn ? (
              <>
                <li>
                  <Link to="/users" style={{ fontSize: '20px', textAlign: 'center' }}>Profile</Link>
                </li>
                <li>
                  <Link to="/fooditems/create" style={{ fontSize: '20px', textAlign: 'center' }}>Food Items</Link>
                </li>
                <li>
                  <Link to="/donations" style={{ fontSize: '20px', textAlign: 'center' }}>Donations</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <div style={{ display: 'flex', justifyContent: 'center', fontSize: '20px' }}><li>
                <Link to="/login">Login</Link>
              </li></div>

            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/*" element={<Users />} />
          <Route path="/users/create" element={<CreateUser />} />
          <Route path="/fooditems/create" element={<CreateFoodItem />} />
          <Route path="/donations" element={<Donation />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
