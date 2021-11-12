import {useState} from 'react'
import {Link} from "react-router-dom";
import CountryGrid from './CountryGrid.styled'
import Country from '../CountryCard/Country'
import Forms from './Forms.styled'

export default function CountriesList({countries}) {
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState('all')

  const handleChange = (event) =>{
    const {name, value} = event.target
    if (name === 'country'){
      setSearch(value)
    } else if (name === 'region'){
      setRegion(value)
    }
  }
  const filtered = countries.filter(country => {
    if(region === 'all'){
      return country
    } else {
      return country.region.toLowerCase().includes(region.toLowerCase())
    }
  }).filter(country => {
    return country.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <>
    <Forms>
      <input  name="country" className="searchInput" type="search" onChange={handleChange} placeholder="Search for a Country" />
      <select name="region" className="dropDown" id="region" onChange={handleChange} >
        <option value="none" defaultValue>
        Filter by region
        </option>
        <option value="all" >All</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </Forms>
    <CountryGrid>
      {filtered && filtered.map(country =>(
        <Link key={country.alpha3Code} to={`/${country.alpha3Code}`}>
          <Country key={country.alpha3Code} country={country}/>
        </Link>
      ))}
    </CountryGrid>
    </>
  )
}
