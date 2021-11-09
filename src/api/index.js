import axios from 'axios'

const allCountriesURL = "https://restcountries.com/v2/all"
const countryURL = "https://restcountries.com/v2/name"
const continentURL = "https://restcountries.com/v2/continent"

export const fetchCountries = () => axios.get(allCountriesURL)
export const fetchCountry = (country) => axios.get(`${countryURL}/${country}`)
export const fetchContinent = (continent) => axios.get(`${continentURL}/${continent}`)
