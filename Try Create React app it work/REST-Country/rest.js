// get data form server

fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
        displayCountries(data);
    })

// display show country All name
const displayCountries = countries => {
    const countryContainer = document.getElementById('country-container');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        countryContainer.appendChild(countryDiv);
        const countryInfo = `
        <h1 class = "country-name">${country.name}</h1>
        <button id= "blockBtn"  onClick = "displayCountryDetails('${country.name}')"  class = " button btn btn success">Detail</button>
        
        `;
        
        countryDiv.innerHTML = countryInfo;
    });
   
}


// country Detail

const displayCountryDetails = name => {
    const blockArea = document.getElementById('country-container');
    blockArea.style.display = 'none';
    
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        countryInformation(data[0]);
    }
    )
}

// All country Information 
const countryInformation = country => {
    const countryDetails = document.getElementById('countryDetails');
    const informationDiv = document.createElement('div');
    countryDetails.appendChild(informationDiv);
    informationDiv.innerHTML = `
    <h1>Name: ${country.name}</h1>
    <h4>Capital: ${country.capital}</h4>
    <h4>Cioc: ${country.cioc}</h4>
    <h4>AllSpelling: ${country.altSpellings}</h4>
    <p>Borders: ${country.borders}</p>
    <p>NativeName: ${country.nativeName}</p>
    <p>Region: ${country.region}</p>
    <p>Population: ${country.population}</p>
    <p>Translations: ${country.translations.de}</p>
    <img class = 'country-flag' src = "${country.flag}">
    `;
}






