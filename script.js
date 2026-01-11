document.getElementById('weatherForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value.trim();
    const errorDiv = document.getElementById('errorMessage');
    const resultsContainer = document.getElementById('resultsContainer');

    if (cityName.length < 2) {
        errorDiv.classList.remove('hidden');
        resultsContainer.innerHTML = '';
        return;
    }

    errorDiv.classList.add('hidden');
    
 
    const mockForecast = [
        { day: 'Tomorrow', temp: '22°C', condition: '☀️ Sunny' },
        { day: 'Tuesday', temp: '18°C', condition: '☁️ Cloudy' },
        { day: 'Wednesday', temp: '15°C', condition: '🌧️ Rain' },
        { day: 'Thursday', temp: '20°C', condition: '⛅ Partly Cloudy' },
        { day: 'Friday', temp: '25°C', condition: '☀️ Sunny' },
        
    ];

    displayResults(cityName, mockForecast);
});

function displayResults(city, data) {
    const container = document.getElementById('resultsContainer');
    container.innerHTML = ''; 

    const title = document.createElement('h3');
    title.style.gridColumn = "1 / -1";
    title.textContent = `3-Day Forecast for ${city}`;
    container.appendChild(title);

 
    for (let i = 0; i < data.length; i++) {
        const item = data[i]; 
        
        const card = document.createElement('div');
        card.className = 'weather-card';
        card.innerHTML = `
            <h4>${item.day}</h4>
            <p style="font-size: 1.5rem;">${item.condition}</p>
            <p><strong>${item.temp}</strong></p>
        `;
        container.appendChild(card);
    }
}
