import React, { useState, useEffect } from 'react';

function Donation() {
    const [donationOptions, setDonationOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [donationComplete, setDonationComplete] = useState(false);

    useEffect(() => {
        // Fetch donation options from the server API
        const fetchDonationOptions = async () => {
            try {
                const response = await fetch('/api/donation-options');
                const data = await response.json();
                setDonationOptions(data);
            } catch (error) {
                console.log('Error fetching donation options:', error);
            }
        };

        fetchDonationOptions();
    }, []);

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const handleDonate = () => {
        if (selectedOption) {
            // Perform any necessary donation logic here
            setDonationComplete(true);
        }
    };

    const handleBack = () => {
        setDonationComplete(false);
        setSelectedOption(null);
    };

    return (
        <div>
            {donationComplete ? (
                <div>
                    <h2>Thank You for Your Donation!</h2>
                    <p>Your donation will help those in need.</p>
                    <button onClick={handleBack}>Back</button>
                </div>
            ) : (
                <div>
                    <h2>Make a Donation</h2>
                    <p>Please select a donation amount:</p>
                    <ul>
                        {donationOptions.map((option) => (
                            <li key={option.id}>
                                <input
                                    type="radio"
                                    id={`option-${option.id}`}
                                    name="donationOption"
                                    value={option.id}
                                    checked={selectedOption === option}
                                    onChange={() => handleOptionChange(option)}
                                />
                                <label htmlFor={`option-${option.id}`}>
                                    {option.name} (${option.amount})
                                </label>
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleDonate}>Donate</button>
                </div>
            )}
        </div>
    );
}

export default Donation;
