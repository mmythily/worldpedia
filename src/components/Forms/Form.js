import React from 'react'
import Forms from './Form.styled'

export default function Form({region, handleChange}) {
  return (
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
  )
}
