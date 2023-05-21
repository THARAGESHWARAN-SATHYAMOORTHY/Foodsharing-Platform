import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useNavigate, Link } from 'react-router-dom';
import './CreateFoodItem.css'; // Import the CSS file for table styling

function CreateFoodItem() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [foodName, setFoodName] = useState('');
    const [foodType, setFoodType] = useState('');
    const [allergyAlerts, setAllergyAlerts] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [location, setLocation] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [foodItems, setFoodItems] = useState([]);

    useEffect(() => {
        fetchFoodItems();
    }, []); // Fetch food items on component mount

    const handleCreateFoodItem = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const foodItem = {
            username: formData.get('username'),
            foodName: formData.get('foodName'),
            foodType: formData.get('foodType'),
            allergyAlerts: formData.get('allergyAlerts'),
            expiryDate: formData.get('expiryDate'),
            contactNumber: formData.get('contactNumber'),
            location: formData.get('location'),
        };

        axios
            .post('/api/fooditems', foodItem)
            .then((response) => {
                console.log('Food item created:', response.data);
                setSuccessMessage('Food item created successfully.');

                // Update the table with the newly created food item
                setFoodItems((prevFoodItems) => [...prevFoodItems, response.data]);

                // Reset form inputs
                setUsername('');
                setFoodName('');
                setFoodType('');
                setAllergyAlerts('');
                setExpiryDate('');
                setContactNumber('');
                setLocation('');

                navigate(`/fooditems/${response.data.id}`);
            })
            .catch((error) => {
                console.error('Error creating food item:', error);
            });
    };

    const fetchFoodItems = () => {
        axios
            .get('/api/fooditems')
            .then((response) => {
                setFoodItems(response.data);
            })
            .catch((error) => {
                console.error('Error fetching food items:', error);
            });
    };


    return (
        <div>
            <h2>Create Food Item</h2>
            {successMessage && <p>{successMessage}</p>}
            <form onSubmit={handleCreateFoodItem}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="foodName">Food Name:</label>
                    <input
                        type="text"
                        id="foodName"
                        value={foodName}
                        onChange={(e) => setFoodName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="foodType">Food Type:</label>
                    <input type="text" id="foodType" list="foodOptions" />
                    <datalist id="foodOptions">
                        <option value="Vegetarian"></option>
                        <option value="Non-Vegetarian"></option>
                        <option value="Veg"></option>
                    </datalist>
                </div>

                <div>
                    <label htmlFor="allergyAlerts">Allergy Alerts:</label>
                    <input
                        type="text"
                        id="allergyAlerts"
                        value={allergyAlerts}
                        onChange={(e) => setAllergyAlerts(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="expiryDate">Expiry Date:</label>
                    <input
                        type="datetime-local"
                        id="expiryDate"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="contactNumber">Contact Number:</label>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <select style={{ marginRight: '4px', marginBottom: '10px' }}>
                            <option value="+1">+1</option>
                            <option value="+91">+91</option>
                            <option value="+44">+44</option>
                        </select>
                        <input
                            type="text"
                            id="contactNumber"
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                            pattern="\d{10}"
                            title="Please enter a 10-digit phone number"
                            style={{ display: 'flex', alignItems: 'center', marginRight: '5px' }}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="location">Location:</label>
                    <input
                        type="text"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <button type="submit">Create Food Item</button>
            </form>
            <Link to="/fooditems">Back to Food Items</Link>
        </div>
    );
}

export default CreateFoodItem;
