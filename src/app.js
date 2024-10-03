const API_KEY = '08c4811ad76f0c4b9c2667f69f2ec8ae-a64b2339f035229d0b400001c6724487';
const ACCOUNT_ID = '101-002-29755987-001';
const BASE_URL = 'https://api-fxpractice.oanda.com/v3/accounts/';
const symbols = ['EUR_USD', 'GBP_USD', 'USD_JPY', 'AUD_USD']; // Add more pairs as needed

async function fetchForexData() {
    try {
        const signalsDiv = document.getElementById('signals');
        signalsDiv.innerHTML = ''; // Clear previous signals

        for (const symbol of symbols) {
            const response = await fetch(`${BASE_URL}${ACCOUNT_ID}/pricing?instruments=${symbol}`, {
                headers: {
                    'Authorization': `Bearer ${API_KEY}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            const price = data.prices[0].closeoutBid; // Example price extraction
            const signal = generateSignal(price);
            signalsDiv.innerHTML += `<p>${symbol}: ${signal} at ${price}</p>`;
        }
    } catch (error) {
        const errorDiv = document.getElementById('error');
        errorDiv.textContent = error.message;
    }
}

function generateSignal(price) {
    // Example signal generation logic
    return price > 1.2 ? 'Sell' : 'Buy'; // Adjust this logic as needed
}

// Fetch data when the page loads
window.onload = () => {
    fetchForexData();
};
