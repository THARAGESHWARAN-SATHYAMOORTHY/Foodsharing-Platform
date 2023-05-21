import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function FoodItems() {
    const [foodItems, setFoodItems] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetchFoodItems();
    }, []);

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

    const deleteFoodItem = (foodItemId) => {
        axios
            .delete(`/api/fooditems/${foodItemId}`)
            .then(() => {
                setFoodItems((prevFoodItems) => prevFoodItems.filter((item) => item.id !== foodItemId));
                setSuccessMessage('Food item deleted successfully.');
            })
            .catch((error) => {
                console.error('Error deleting food item:', error);
                setErrorMessage('Failed to delete food item.');
            });
    };

    return (
        <div>
            <h2>Food Items</h2>
            {successMessage && <p>{successMessage}</p>}
            {errorMessage && <p>{errorMessage}</p>}
            <ul>
                {foodItems.map((foodItem) => (
                    <li key={foodItem.id}>
                        <div>
                            <h3>{foodItem.foodName}</h3>
                            <p>Type: {foodItem.foodType}</p>
                            <p>Expiry Date: {foodItem.expiryDate}</p>
                            <p>Allergy Alerts: {foodItem.allergyAlerts}</p>
                            <p>Location: {foodItem.location}</p>
                            <p>Contact Details: {foodItem.contactNumber}</p>
                            <p>Posted By: {foodItem.username}</p>
                            <div>
                                {foodItem.currentUser && (
                                    <div>
                                        <Link to={`/fooditems/${foodItem.id}`}>Edit</Link>
                                        <button onClick={() => deleteFoodItem(foodItem.id)}>Delete</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <Link to="/fooditems/create">Create Food Item</Link>
        </div>
    );
}

export default FoodItems;
