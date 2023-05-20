import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import axios from 'axios';

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
      .then((response) => setUsers(response.data));
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

function FoodItems() {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    axios.get('/api/fooditems/')
      .then((response) => setFoodItems(response.data));
  }, []);

  return (
    <div>
      <h2>Food Items</h2>
      <ul>
        {foodItems.map((foodItem) => (
          <li key={foodItem.id}>
            {foodItem.name} - {foodItem.description}
          </li>
        ))}
      </ul>
      <Link to="/fooditems/create">Create Food Item</Link>
    </div>
  );
}

function CreateFoodItem() {
  return (
    <div>
      <h2>Create Food Item</h2>
      <p>Form to create a new food item goes here</p>
    </div>
  );
}

function Donations() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    axios.get('/api/donations/')
      .then((response) => setDonations(response.data));
  }, []);

  return (
    <div>
      <h2>Donations</h2>
      <ul>
        {donations.map((donation) => (
          <li key={donation.id}>
            {donation.donor.name} donated {donation.food_item.name} ({donation.quantity})
          </li>
        ))}
      </ul>
      <Link to="/donations/create">Create Donation</Link>
    </div>
  );
}

function CreateDonation() {
  return (
    <div>
      <h2>Create Donation</h2>
      <p>Form to create a new donation goes here</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <h1 className="header">Food Sharing Platform</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/fooditems">Food Items</Link>
            </li>
            <li>
              <Link to="/donations">Donations</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/create" element={<CreateUser />} />
          <Route path="/fooditems" element={<FoodItems />} />
          <Route path="/fooditems/create" element={<CreateFoodItem />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/donations/create" element={<CreateDonation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
