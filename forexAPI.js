// src/forexAPI.js

// You can export functions to fetch data from the API here
export async function fetchForexSignals() {
    const response = await fetch('https://api-fxpractice.oanda.com/v3/accounts/101-002-29755987-001/orders', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer 08c4811ad76f0c4b9c2667f69f2ec8ae-a64b2339f035229d0b400001c6724487',
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.orders; // Adjust according to your API response structure
}
