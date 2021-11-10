import React from 'react'

export default function SelectContinent() {
  return (
    <div>
      <select name="continent" id="coontinent">
        <option value="all" defaultValue>All</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  )
}
