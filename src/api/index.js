import axios from 'axios'

const allCountriesURL = "https://restcountries.com/v2/all"
const countryURL = "https://restcountries.com/v2/name"
const countryAlphaURL = "https://restcountries.com/v2/alpha"

export const fetchCountries = () => axios.get(allCountriesURL)
export const fetchCountry = (country) => axios.get(`${countryURL}/${country}`)
export const fetchCountryAlpha = (country) => axios.get(`${countryAlphaURL}/${country}`)
