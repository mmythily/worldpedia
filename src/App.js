import React, {useState, useEffect} from 'react'
import './App.css';
import {fetchCountries, fetchCountry } from '../src/api'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar.jsx';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountriesList/CountryDetails/CountryDetails';

function App() {
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
    <Router>
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<CountriesList countries={countries}/>}>
        </Route>
        <Route path='/:id' element={<CountryDetails countries={countries}/>}>
        </Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
