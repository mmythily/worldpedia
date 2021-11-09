import React, {useState, useEffect} from 'react'
import { fetchCountries, fetchCountry } from '../../api'

import Country from './CountryCard/Country'
import CountryGrid from './CountryGrid.styled'

export default function CountriesList() {
  const [countries, setCountries] = useState('')
  const [input] = useState('and')

  useEffect(() => {
      if(input.length === 0){
        const all = async () =>{
          const response = await fetchCountries()
          setCountries(response.data)
        }
        all()
      }
      else{
        const some = async () =>{
          const response = await fetchCountry(input)
          setCountries(response.data)
        }
        some()
      }
    }, [input])

  return (
    <>
      <p>Showing {countries.length} countries</p>
    <CountryGrid>
      {countries && countries.map(country =>(
        <Country key={country.alpha3Code} country={country}/>        
      ))}
    </CountryGrid>
    </>
  )
}
