import React from 'react'
import CountryStyled from './CountryCard.styled'

export default function Country({country}) {
  return(
    <CountryStyled>      
      <img src={country.flags.svg} alt={`${country.name}'s flag`} />
      <div className="card">
        <h2>{country.name}</h2>
        <p><strong>Population:&nbsp;</strong>{country.population}</p>
        <p><strong>Region:&nbsp;</strong>{country.region}</p>
        <p><strong>Capital:&nbsp;</strong>{country.capital}</p>
      </div>
    </CountryStyled>
  )
}
