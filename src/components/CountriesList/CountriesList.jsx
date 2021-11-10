import React from 'react'
import {Link} from "react-router-dom";
import CountryGrid from './CountryGrid.styled'

import Country from './CountryCard/Country'
import SearchCountry from '../Forms/SearchCountry';
import SelectContinent from '../Forms/SelectContinent';

export default function CountriesList({countries}) {
  return (
    <>
    <form>
            <SearchCountry />
            <SelectContinent />
          </form>
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
