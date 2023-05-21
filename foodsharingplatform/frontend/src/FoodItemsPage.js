import React from 'react';
import { Link } from 'react-router-dom';

const FoodItemsPage = ({ foodItems }) => {
    return (
        <div>
            <h2>Food Items</h2>
            <table className="food-items-table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Food Name</th>
                        <th>Food Type</th>
                        <th>Allergy Alerts</th>
                        <th>Expiry Date</th>
                        <th>Contact Number</th>
                        <th>Location</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {foodItems.map((foodItem) => (
                        <tr key={foodItem.id}>
                            <td>{foodItem.username}</td>
                            <td>{foodItem.foodName}</td>
                            <td>{foodItem.foodType}</td>
                            <td>{foodItem.allergyAlerts}</td>
                            <td>{foodItem.expiryDate}</td>
                            <td>{foodItem.contactNumber}</td>
                            <td>{foodItem.location}</td>
                            <td>
                                <Link to={`/fooditems/${foodItem.id}`}>Edit</Link>
                                <button onClick={() => deleteFoodItem(foodItem.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default FoodItemsPage;
