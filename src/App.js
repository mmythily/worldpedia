import React, {useState, useEffect} from 'react'
import './App.css';
import {fetchCountries} from '../src/api'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar.jsx';
import CountryDetails from './components/CountryDetails/CountryDetails';
import CountriesList from './components/CountriesList/CountriesList';

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetch = async () =>{
    try {
      const response = await fetchCountries()
      setCountries(response.data)
    }
    catch (error) {
      console.log(error)
    }
    finally {
    }}
    fetch()
    
  }, [])

  return (
    <Router>
    <div className='App'>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<CountriesList countries={countries} />}/>
        <Route path='/:id' element={<CountryDetails countries={countries}/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
