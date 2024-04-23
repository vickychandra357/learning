import axios from "axios";
axios.get("https://restcountries.eu/rest/v2/all")
.then((response) => {
// Extract country names from the response data
const countryNames = response.data.map((country) => country.name);

    // Print country names
    countryNames.forEach((name) => console.log(name));
  })
  .catch((error) => {
    console.error("Error:", error);
  });