import React, {useState} from 'react'
import {Link} from "react-router-dom";
import CountryGrid from './CountryGrid.styled'

import Country from './CountryCard/Country'

import Forms from './Form.styled'


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
    <Forms>
      <form>
        <input className="searchInput" type="text" name="country" placeholder="Search for a country" onChange={handleChange}/>
        <select className="dropDown" name="region" id="continent" value={region} onChange={handleChange}>
          <option disabled>Filter by Region</option>
          <option value="all" defaultValue>All</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </form>
    </Forms>

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
