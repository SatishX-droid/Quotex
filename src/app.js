// src/app.js

// Function to fetch Forex signals
async function fetchForexSignals() {
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

// Function to display signals
async function displaySignals() {
    try {
        const signals = await fetchForexSignals();
        const container = document.getElementById('signals-container');
        container.innerHTML = ''; // Clear previous signals

        // Assuming signals is an array of objects
        signals.forEach(signal => {
            const signalElement = document.createElement('div');
            signalElement.innerText = `Order ID: ${signal.id}, Instrument: ${signal.instrument}`; // Adjust according to your signal structure
            container.appendChild(signalElement);
        });
    } catch (error) {
        console.error('Error fetching signals:', error);
    }
}

// Toggle dark/light mode
document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Fetch and display signals on load
displaySignals();
