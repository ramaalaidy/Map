let countries = ['India', 'United States', 'Russia', 'Japan', 'China'];

let filteredCountries = countries.filter(country => !country.startsWith('U') && !country.startsWith('R'));
console.log(filteredCountries);  

let upperCaseCountries = filteredCountries.map(country => country.toUpperCase());
console.log(upperCaseCountries);  

let totalCharacters = upperCaseCountries.reduce((total, country) => total + country.length, 0);
console.log(totalCharacters);  
