const countriesDiv = document.getElementById("countries");
const searchInput = document.getElementById("search");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

let countries = [];

fetchCountries();

function fetchCountries() {

    loading.textContent = "Loading countries...";

    fetch("https://restcountries.com/v3.1/all")

        .then(response =>
         response.json()

        )

        .then(data => {

            countries = data;

            loading.textContent = "";

            displayCountries(countries);

        })

        .catch(err => {

            loading.textContent = "";
            console.log(err);
            error.textContent = "Failed to load data.";

        });
}

function displayCountries(countryList) {

    countriesDiv.innerHTML = "";

    countryList.forEach(country => {

        countriesDiv.innerHTML += `
            <div class="card">
                <img src="${country.flags.png}">
                <h3>${country.name.common}</h3>
                <p>Population: ${country.population}</p>
            </div>
        `;
    });
}

searchInput.addEventListener("input", () => {

    const searchText = searchInput.value.toLowerCase();

    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(searchText)
    );

    displayCountries(filteredCountries);
});
