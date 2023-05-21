import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Donation() {
    const [donationAmount, setDonationAmount] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCVV] = useState('');
    const [donated, setDonated] = useState(false);

    const handleDonation = () => {
        // Perform donation processing or API call here
        // Simulating a donation by setting the 'donated' state to true
        setDonated(true);
    };

    const handleAmountChange = (event) => {
        setDonationAmount(event.target.value);
    };

    const handleCardNumberChange = (event) => {
        setCardNumber(event.target.value);
    };

    const handleExpiryDateChange = (event) => {
        setExpiryDate(event.target.value);
    };

    const handleCVVChange = (event) => {
        setCVV(event.target.value);
    };

    return (
        <div>
            <h2>Make a Donation</h2>
            {donated ? (
                <div>
                    <p>Thank you for your generous donation!</p>
                    <p>Your contribution helps those in need.</p>
                    <Link to="/">Back to Home</Link>
                </div>
            ) : (
                <div>
                    <p>Please select a donation amount:</p>
                    <select value={donationAmount} onChange={handleAmountChange}>
                        <option value="">Select amount</option>
                        <option value="10">$10</option>
                        <option value="20">$20</option>
                        <option value="50">$50</option>
                    </select>
                    <p>Card Details:</p>
                    <input type="text" placeholder="Card Number" value={cardNumber} onChange={handleCardNumberChange} />
                    <input type="text" placeholder="Expiry Date" value={expiryDate} onChange={handleExpiryDateChange} />
                    <input type="text" placeholder="CVV" value={cvv} onChange={handleCVVChange} />
                    <button onClick={handleDonation}>Donate</button>
                </div>
            )}
        </div>
    );
}

export default Donation;
