import React, { useState } from 'react';
import axios from 'axios';

function CreateFoodItem() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [manufactureDate, setManufactureDate] = useState('');
    const [allergyAlerts, setAllergyAlerts] = useState('');
    const [location, setLocation] = useState('');
    const [contactDetails, setContactDetails] = useState('');

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

        axios.post('/api/fooditems', newFoodItem)
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
            })
            .catch((error) => {
                console.error('Error creating food item:', error);
            });
    };

    return (
        <div>
            <h2>Create Food Item</h2>
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
        </div>
    );
}

export default CreateFoodItem;
