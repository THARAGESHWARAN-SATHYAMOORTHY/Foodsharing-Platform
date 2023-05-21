import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function FoodItems() {
    const [foodItems, setFoodItems] = useState([]);

    useEffect(() => {
        fetchFoodItems();
    }, []);

    const fetchFoodItems = () => {
        axios
            .get('/frontend/fooditems/')
            .then((response) => setFoodItems(response.data))
            .catch((error) => console.error('Error fetching food items:', error));
    };

    return (
        <div>
            <h2>Food Items</h2>
            <ul>
                {foodItems.map((foodItem) => (
                    <li key={foodItem.id}>
                        <div>
                            <h3>{foodItem.name}</h3>
                            <p>Description: {foodItem.description}</p>
                            <p>Type: {foodItem.type}</p>
                            <p>Expiry Date: {foodItem.expiryDate}</p>
                            <p>Manufacture Date: {foodItem.manufactureDate}</p>
                            <p>Allergy Alerts: {foodItem.allergyAlerts}</p>
                            <p>Location: {foodItem.location}</p>
                            <p>Contact Details: {foodItem.contactDetails}</p>
                            <p>Posted By: {foodItem.user.name}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <Link to="/fooditems/create">Create Food Item</Link>
        </div>
    );
}

export default FoodItems;
