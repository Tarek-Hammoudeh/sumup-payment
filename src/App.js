import React, { useState } from 'react';
import './App.css';

function App() {
    const [donationAmount, setDonationAmount] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleDonation = (amount) => {
        setDonationAmount(amount);
        setShowConfirmation(true);
    };

    const handleCancel = () => {
        setShowConfirmation(false);
    };

    const handleConfirm = () => {
        fetch('/donate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: donationAmount }),
        })
            .then((response) => {
                console.log(response);
                setShowConfirmation(false);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="App">
            <h1>Donation App</h1>
            <div className="grid-container">
                <div className="grid-item">
                    <button onClick={() => handleDonation(5)}>5 €</button>
                </div>
                <div className="grid-item">
                    <button onClick={() => handleDonation(10)}>10 €</button>
                </div>
                <div className="grid-item">
                    <button onClick={() => handleDonation(15)}>15 €</button>
                </div>
                <div className="grid-item">
                    <button onClick={() => handleDonation(20)}>20 €</button>
                </div>
                <div className="grid-item">
                    <button onClick={() => handleDonation(25)}>25 €</button>
                </div>
                <div className="grid-item">
                    <button onClick={() => handleDonation(30)}>30 €</button>
                </div>
            </div>
            {showConfirmation && (
                <div className="confirmation">
                    <div className="confirmation-box">
                        <h2>Are you sure you want to donate {donationAmount} €?</h2>
                        <div className="confirmation-buttons">
                            <button onClick={handleCancel}>Cancel</button>
                            <button onClick={handleConfirm}>OK</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
