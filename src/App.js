
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import SearchCountry from './components/Forms/SearchCountry';
import SelectContinent from './components/Forms/SelectContinent';
import CountriesList from './components/CountriesList/CountriesList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <form>
        <SearchCountry />
        <SelectContinent />
      </form>
      <CountriesList />
    </div>
  );
}

export default App;
