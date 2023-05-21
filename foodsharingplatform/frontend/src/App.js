import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import axios from 'axios';
import Login from './Login';
import Signup from './Signup';
import Donation from './Donation';
import FoodItems from './FoodItems';
import CreateFoodItem from './CreateFoodItem';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the Food Sharing Platform!</p>
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
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
      <Link to="/users/create">Create User</Link>
    </div>
  );
}

function CreateUser() {
  return (
    <div>
      <h2>Create User</h2>
      <p>Form to create a new user goes here</p>
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
        <h1 className="header">Food Sharing Platform</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {isLoggedIn ? (
              <>
                <li>
                  <Link to="/users">Users</Link>
                </li>
                <li>
                  <Link to="/fooditems">Food Items</Link>
                </li>
                <li>
                  <Link to="/donations">Donations</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/*" element={<Users />} />
          <Route path="/users/create" element={<CreateUser />} />
          <Route path="/fooditems/" element={<FoodItems />} />
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
