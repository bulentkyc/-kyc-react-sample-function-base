import './App.css';
import kyc from 'kyc';
import Card from './components/Card';
import {useState, useEffect} from 'react';

function App() {

  const [countries, setCountries] = useState();

  useEffect(() => {
    let url = 'https://restcountries.eu/rest/v2/all';
    let headers = {};
    let key = '';
    let timeDiff = '1d';
    let log = 'true';
    let component = (item) => {
      return (
        <CustomComponent 
          imgSrc = {item.flag} 
          title = {item.name}
        />
      );
    }

    kyc(url, {log, timeDiff, component})
    .then(output => setCountries(output));
  }, []);

  return (
    <div className="App">
      <h1>KYC Sample with countries</h1>
      {countries}
    </div>
  );
}

export default App;
