     )

        .then(data => {

            countries = data;

            loading.textContent = "";

            displayCountries(countries);

      
   

    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(searchText)
    );

    displayCountries(filteredCountries);
});
   
