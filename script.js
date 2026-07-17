[2:44 PM, 7/17/2026] Ayesha Asad: searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();

    const filteredCountries = countries.filter(country => 
        country.name.common.toLowerCase().includes(searchText)
    );

    displayCountries(filteredCountries);
});
[4:14 PM, 7/17/2026] Ayesha Asad: const searchInput = document.getElementById('search');
const loading = document.getElementById('loading');
const error = document.getElementById('error');
const countriesDiv = document.getElementById('countries');

let countries = [];

// Fetch all countries on page load
fetch('https://restcountries.herokuapp.com/v3.1/all')
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
        co…

