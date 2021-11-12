import CountryStyled from './CountryCard.styled'

export default function Country({country}) {
  return(
    <CountryStyled>      
      <img src={country.flags.svg} alt={`${country.name}'s flag`} />
      <div className="card">
        <h3>{country.name}</h3>
        <p><strong>Population:&nbsp;</strong>{country.population}</p>
        <p><strong>Region:&nbsp;</strong>{country.region}</p>
        <p><strong>Capital:&nbsp;</strong>{country.capital}</p>
      </div>
    </CountryStyled>
  )
}
