const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your API key
const BASE_URL = 'https://api.example.com/forex'; // Use the provider’s base URL

export async function getForexData(symbol) {
    try {
        const response = await fetch(`${BASE_URL}?symbol=${symbol}&apikey=${API_KEY}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching forex data:", error);
        return null;
    }
}
