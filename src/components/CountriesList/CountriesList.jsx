import React, {useState} from 'react'
import {Link} from "react-router-dom";
import CountryGrid from './CountryGrid.styled'

import Country from './CountryCard/Country'
import Form from '../Forms/Form';

export default function CountriesList({countries}) {
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState('all')

  const handleChange = (event) =>{
    const {name, value} = event.target
    if (name==='country'){
      setSearch(value)
    } else if (name==='region') {
      setRegion(value)
    }
  }

  return (
    <>
    <Form handleChange={handleChange}/>
    <p>Showing {countries.length} countries</p>
    <CountryGrid>
      {countries && countries.map(country =>(
        <Link key={country.alpha3Code} to={`/${country.alpha3Code}`}>
          <Country key={country.alpha3Code} country={country}/>
        </Link>
      ))}
    </CountryGrid>
    </>
  )
}
