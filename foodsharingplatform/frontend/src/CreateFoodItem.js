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
    const [addressOption, setAddressOption] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [foodItems, setFoodItems] = useState([]);
    const [useCurrentLocation, setUseCurrentLocation] = useState(false);
    const [selectedFoodItem, setSelectedFoodItem] = useState(null);

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
            .post('/api/fooditems/create', foodItem)
            .then((response) => {
                console.log('Food item created:', response.data);
                alert('SUCCESSFUL!');
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

                setSelectedFoodItem(response.data);
            })
            .catch((error) => {
                console.error('Error creating food item:', error);
            });
    };

    const fetchFoodItems = () => {
        axios
            .get('/api/fooditems/create')
            .then((response) => {
                setFoodItems(response.data);
            })
            .catch((error) => {
                console.error('Error fetching food items:', error);
            });
    };

    const handleLocationToggle = () => {
        setUseCurrentLocation(!useCurrentLocation);
        setLocation('');
    };

    const handleAddressOptionChange = (event) => {
        setAddressOption(event.target.value);
        setLocation('');
    };

    return (
        <div>
            {selectedFoodItem ? (
                <FoodItemDetails foodItem={selectedFoodItem} />
            ) : (
                <div>
                    <h2 className="create-food-item-title">Create Food Item</h2>
                    {successMessage && <p className="success-message">{successMessage}</p>}
                    <form onSubmit={handleCreateFoodItem} className="create-food-item-form">
                        <div>
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="create-food-item-input"
                            />
                        </div>
                        <div>
                            <label htmlFor="foodName">Food Name:</label>
                            <input
                                type="text"
                                id="foodName"
                                value={foodName}
                                onChange={(e) => setFoodName(e.target.value)}
                                className="create-food-item-input"
                            />
                        </div>
                        <div>
                            <label htmlFor="foodType">Food Type:</label>
                            <input
                                type="text"
                                id="foodType"
                                list="foodOptions"
                                value={foodType}
                                onChange={(e) => setFoodType(e.target.value)}
                                className="create-food-item-input"
                            />
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
                                className="create-food-item-input"
                            />
                        </div>
                        <div>
                            <label htmlFor="expiryDate">Expiry Date:</label>
                            <input
                                type="datetime-local"
                                id="expiryDate"
                                value={expiryDate}
                                onChange={(e) => setExpiryDate(e.target.value)}
                                className="create-food-item-input"
                            />
                        </div>
                        <div>
                            <label htmlFor="contactNumber">Contact Number:</label>
                            <div className="contact-number-container">
                                <select
                                    className="contact-number-code"
                                    onChange={(e) => setContactNumberCode(e.target.value)}
                                >
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
                                    className="contact-number-input"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="location">Location:</label>
                            {useCurrentLocation ? (
                                <p className="current-location-info">
                                    Current Location is added {navigator.geolocation.getCurrentPosition((position) => position.coords.latitude + ', ' + position.coords.longitude)}
                                </p>
                            ) : (
                                <div>
                                    <select value={addressOption} onChange={handleAddressOptionChange} className="address-option-select">
                                        <option value="">Select Address Option</option>
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                    {addressOption && (
                                        <input
                                            type="text"
                                            id="location"
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                            className="location-input"
                                        />
                                    )}
                                </div>
                            )}
                            <button type="button" onClick={handleLocationToggle} className="location-toggle-button">
                                {useCurrentLocation ? 'Use Manual Location' : 'Use Current Location'}
                            </button>
                        </div>
                        <button
                            type="submit"
                            disabled={!username || !foodName || !foodType || !expiryDate || !contactNumber || (!useCurrentLocation && !location)}
                            className="create-food-item-button"
                        >
                            Create Food Item
                        </button>
                    </form>

                    <div className="food-details">
                        <div className="options-container">
                            <div className="options-dots"></div>
                            <div className="options-dropdown">
                                <p className="option">Delete Post</p>
                                <p className="option">Edit Post</p>
                            </div>
                        </div>
                        <h2 className="heading" style={{ fontSize: '40px', textAlign: 'center', backgroundColor: '#27e9ff', padding: '10px' }}>
                            Food You Can Grab
                        </h2>
                        <div className="food-details-container">
                            <div className="food-details">
                                <p className="food-detail">
                                    <span className="detail-label">Username:</span> {username}
                                </p>
                                <p className="food-detail">
                                    <span className="detail-label">Food Name:</span> {foodName}
                                </p>
                                <p className="food-detail">
                                    <span className="detail-label">Food Type:</span> {foodType}
                                </p>
                                <p className="food-detail">
                                    <span className="detail-label">Allergy Alerts:</span> {allergyAlerts}
                                </p>
                                <p className="food-detail">
                                    <span className="detail-label">Expiry Date:</span> {expiryDate}
                                </p>
                                <p className="food-detail">
                                    <span className="detail-label">Contact Number:</span> {contactNumber} <span className="contact-icon">✉</span>
                                </p>
                                <p className="food-detail">
                                    <span className="detail-label">Location:</span> {location} <span className="location-icon">📍</span>
                                </p>
                                <div className="like-section">
                                    <span className="like-icon">❤️</span>
                                    <p className="like-count">25 Likes</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            )}
        </div>
    );
}

export default CreateFoodItem;
