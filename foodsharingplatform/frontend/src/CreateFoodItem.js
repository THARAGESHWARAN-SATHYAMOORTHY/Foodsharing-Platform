import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './CreateFoodItem.css'; // Import the CSS file for table styling

function CreateFoodItem() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [manufactureDate, setManufactureDate] = useState('');
    const [allergyAlerts, setAllergyAlerts] = useState('');
    const [location, setLocation] = useState('');
    const [contactDetails, setContactDetails] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [foodItems, setFoodItems] = useState([]);

    useEffect(() => {
        fetchFoodItems();
    }, []); // Fetch food items on component mount

    const handleCreateFoodItem = (e) => {
        e.preventDefault();

        const newFoodItem = {
            name,
            description,
            type,
            expiryDate,
            manufactureDate,
            allergyAlerts,
            location,
            contactDetails,
        };

        axios
            .post('/frontend/fooditems/', newFoodItem)
            .then((response) => {
                // Handle successful creation of food item
                console.log('Food item created:', response.data);

                // Clear the form fields
                setName('');
                setDescription('');
                setType('');
                setExpiryDate('');
                setManufactureDate('');
                setAllergyAlerts('');
                setLocation('');
                setContactDetails('');

                // Display success message
                setSuccessMessage('Food item created successfully.');

                // Update the list of food items
                setFoodItems([...foodItems, response.data]);
            })
            .catch((error) => {
                console.error('Error creating food item:', error);
            });
    };

    const fetchFoodItems = () => {
        axios
            .get('/frontend/fooditems')
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
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="type">Type:</label>
                    <input
                        type="text"
                        id="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="expiryDate">Expiry Date:</label>
                    <input
                        type="text"
                        id="expiryDate"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="manufactureDate">Manufacture Date:</label>
                    <input
                        type="text"
                        id="manufactureDate"
                        value={manufactureDate}
                        onChange={(e) => setManufactureDate(e.target.value)}
                    />
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
                    <label htmlFor="location">Location:</label>
                    <input
                        type="text"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="contactDetails">Contact Details:</label>
                    <input
                        type="text"
                        id="contactDetails"
                        value={contactDetails}
                        onChange={(e) => setContactDetails(e.target.value)}
                    />
                </div>
                <button type="submit">Create Food Item</button>
            </form>
            <Link to="/fooditems">Back to Food Items</Link>

            <h2>Food Items</h2>
            <table className="food-items-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Expiry Date</th>
                        <th>Manufacture Date</th>
                        <th>Allergy Alerts</th>
                        <th>Location</th>
                        <th>Contact Details</th>
                    </tr>
                </thead>
                <tbody>
                    {foodItems.map((foodItem) => (
                        <tr key={foodItem.id}>
                            <td>{foodItem.name}</td>
                            <td>{foodItem.description}</td>
                            <td>{foodItem.type}</td>
                            <td>{foodItem.expiryDate}</td>
                            <td>{foodItem.manufactureDate}</td>
                            <td>{foodItem.allergyAlerts}</td>
                            <td>{foodItem.location}</td>
                            <td>
                                <a href={`mailto:${foodItem.contactDetails}`}>
                                    Contact User
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CreateFoodItem;
