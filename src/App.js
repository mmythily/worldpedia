import {useState, useEffect, useContext} from 'react'
import './App.css';

import {fetchCountries} from '../src/api'
import { CountriesContext } from './context/context-countries';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar.jsx';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountriesList/CountryDetails/CountryDetails';

function App() {
  const [loading, setLoading] = useState(false);
  const { setCountries } = useContext(CountriesContext);


  useEffect(() => {
    const fetchData = async () =>{
      try{
        setLoading(true);
        const countries = await fetchCountries()
        setCountries(countries.data)
      } catch(error){
        console.log(error)
      } finally{
        setLoading(false)
      }
    }
    fetchData()
  }, [setCountries])

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Router>
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<CountriesList />}>
        </Route>
        <Route path='/:id' element={<CountryDetails />}>
        </Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
