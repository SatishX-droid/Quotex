document.addEventListener('DOMContentLoaded', () => {
    fetchForexSignals();

    // Register service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
            .then(() => console.log('Service Worker registered successfully'))
            .catch((error) => console.error('Service Worker registration failed:', error));
    }
});

async function fetchForexSignals() {
    const signals = await getForexSignals();
    displaySignals(signals);
}

function displaySignals(signals) {
    const signalContainer = document.getElementById('signal-container');
    signals.forEach(signal => {
        const signalElement = document.createElement('div');
        signalElement.className = 'signal';
        signalElement.textContent = `${signal.currencyPair}: ${signal.signal}`;
        signalContainer.appendChild(signalElement);
    });
}
