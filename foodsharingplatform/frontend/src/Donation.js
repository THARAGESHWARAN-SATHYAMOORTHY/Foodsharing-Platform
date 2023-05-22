import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Donation() {
    const [donationAmount, setDonationAmount] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCVV] = useState('');
    const [cardType, setCardType] = useState('Credit');
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
        const inputValue = event.target.value;
        const cardNumberRegex = /^\d+$/; // Only allow digits

        if (cardNumberRegex.test(inputValue) || inputValue === '') {
            setCardNumber(inputValue);
        }
    };

    const handleCVVChange = (event) => {
        const inputValue = event.target.value;
        const cvvRegex = /^\d+$/; // Must be 3 or 4 digits

        if (cvvRegex.test(inputValue) || inputValue === '') {
            setCVV(inputValue);
        }
    };

    const handleCardTypeChange = (event) => {
        setCardType(event.target.value);
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
                    <input
                        type="number"
                        placeholder="Custom amount"
                        value={donationAmount}
                        onChange={handleAmountChange}
                    />
                    <p>Card Details:</p>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <label htmlFor="cardType">Card Type:</label>
                            <select id="cardType" value={cardType} onChange={handleCardTypeChange}>
                                <option value="Credit">Credit</option>
                                <option value="Debit">Debit</option>
                                <option value="Prepaid">Prepaid</option>
                            </select>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <label htmlFor="cardNumber">Card Number:</label>
                            <input
                                type="text"
                                id="cardNumber"
                                placeholder="Card Number"
                                value={cardNumber}
                                onChange={handleCardNumberChange}
                            />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <label htmlFor="expiryDate">Expiry Date:</label>
                            <input
                                type="datetime-local"
                                id="expiryDate"
                                value={expiryDate}
                                onChange={(e) => setExpiryDate(e.target.value)}
                            />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <label htmlFor="cvv">CVV:</label>
                            <input
                                type="number"
                                id="cvv"
                                placeholder="CVV"
                                value={cvv}
                                onChange={handleCVVChange}
                            />
                        </div>
                        <button onClick={handleDonation}>Donate</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Donation;
