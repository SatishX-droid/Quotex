import { getForexData } from './forexAPI.js';

let forexData = [];
let movingAverage = [];

const chart = document.getElementById('chart');

function calculateMovingAverage(data, period) {
    let avg = [];
    for (let i = 0; i < data.length - period; i++) {
        const slice = data.slice(i, i + period);
        const sum = slice.reduce((acc, val) => acc + val.close, 0);
        avg.push(sum / period);
    }
    return avg;
}

function generateSignal(shortMA, longMA) {
    if (shortMA[shortMA.length - 1] > longMA[longMA.length - 1]) {
        return 'Buy';
    } else {
        return 'Sell';
    }
}

async function loadChart(symbol) {
    const forexData = await getForexData(symbol);

    // Example: Data points are fetched
    const closingPrices = forexData.map(point => point.close);
    const shortMA = calculateMovingAverage(closingPrices, 10);
    const longMA = calculateMovingAverage(closingPrices, 50);

    const signal = generateSignal(shortMA, longMA);
    drawChart(forexData, signal);
}

function drawChart(data, signal) {
    // Clear the chart container
    chart.innerHTML = '';

    // Render signal (Buy or Sell)
    const signalElement = document.createElement('h2');
    signalElement.textContent = `Signal: ${signal}`;
    chart.appendChild(signalElement);

    // Here, you can use D3.js, Chart.js, or any library to draw the line chart with data
}

loadChart('EURUSD'); // Load default symbol (EURUSD)
