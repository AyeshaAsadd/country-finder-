const searchInput = document.getElementById('search');
const loading = document.getElementById('loading');
const error = document.getElementById('error');
const countriesDiv = document.getElementById('countries');

let countries = [];

// Fetch all countries on page load
fetch('https://openmarket.pk/api/countries')
    .then(response => response.json())
    .then(data => {
        countries = data;
        loading.textContent = "";
        displayCountries(countries);
    })
    .catch(err => {
        error.textContent = "Failed to load countries";
    });

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchText = e.target.value.toLowerCase();
    
    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(searchText)
    );
    
    displayCountries(filteredCountries);
});

// Display countries function
function displayCountries(countriesToDisplay) {
    countriesDiv.innerHTML = '';
    
    countriesToDisplay.forEach(country => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${country.flags.png}" alt="${country.name.common}">
            <h3>${country.name.common}</h3>
            <p>Capital: ${country.capital ? country.capital[0] : 'N/A'}</p>
        `;
        countriesDiv.appendChild(card);
    });
}
