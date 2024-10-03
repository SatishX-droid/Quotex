const API_KEY = '08c4811ad76f0c4b9c2667f69f2ec8ae-a64b2339f035229d0b400001c6724487';
const ACCOUNT_ID = '101-002-29755987-001';
const BASE_URL = 'https://api-fxpractice.oanda.com/v3/accounts/';

document.getElementById('fetch-signals').addEventListener('click', async () => {
    const signalsDiv = document.getElementById('signals');
    signalsDiv.innerHTML = 'Fetching signals...';
    
    try {
        const response = await fetch(`${BASE_URL}${ACCOUNT_ID}/pricing?instruments=EUR_USD`, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch signals');
        }

        const data = await response.json();
        signalsDiv.innerHTML = JSON.stringify(data, null, 2);
    } catch (error) {
        signalsDiv.innerHTML = `Error: ${error.message}`;
    }
});
