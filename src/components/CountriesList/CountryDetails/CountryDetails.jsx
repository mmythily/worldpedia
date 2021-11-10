import React, {useState, useEffect} from 'react'
import {useParams, Link} from "react-router-dom";
import { fetchCountryAlpha } from '../../../api';

import styled from 'styled-components'
import Details from './Details.styled';
import {ReactComponent as Icon} from './backbutton.svg'

const Button = styled.button`
  border: 1px solid #eee;
  border-radius: 5px;
  box-shadow: 1px 1px 20px 11px #eee;
  padding:10px 20px 10px 10px;
  margin: 15px 10px;
  font-size: 25px;
  background-color: white;
`
const BackIcon = styled(Icon)`
  width: 60px;
  height: 22px;
`

export default function CountryDetails() {
  const [country, setCountry] = useState([])
  const {id} = useParams()
  
  useEffect(() => {
      const alphaCountry = async () =>{
        const response = await fetchCountryAlpha(id)
        setCountry(response.data)
      }
      alphaCountry()
    }, [id])

    
  return ( country &&
    <>
      <Link to='/'><Button><BackIcon/> Back</Button></Link>
      <Details>
        <div>
          <img className="image" src={country.flag && country.flags.svg} alt={`${country.name}'s flag`} />
        </div>
        <div >
          <h1>{country.name}</h1>
          <br/>
          <p><strong>Native Name:&nbsp;</strong>{country.nativeName}</p>
          <p><strong>Population:&nbsp;</strong>{country.population}</p>
          <p><strong>Region:&nbsp;</strong>{country.region}</p>
          <p><strong>SubRegion:&nbsp;</strong>{country.subregion}</p>
          <p><strong>Capital:&nbsp;</strong>{country.capital}</p>
          <br/>
          <p><strong>Top Level Domain:&nbsp;</strong>{ country.topLevelDomain && country.topLevelDomain.map(domain => domain).join()}</p> 
          <p><strong>Currencies:&nbsp;</strong>{ country.currencies && country.currencies.map(currency => { return `${currency.name} - ${currency.symbol}`}).join(',  ')} </p>
          <span><strong>Languages:&nbsp;</strong>{country.languages && country.languages.map(currency => { return `${currency.name} - ${currency.nativeName} `}).join(',  ')}</span>  
        </div>
      </Details>
    </>
  )
}
