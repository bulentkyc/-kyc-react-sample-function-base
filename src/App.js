import './App.css';
import kyc from 'kyc';
import Card from './components/Card';
import {useState, useEffect} from 'react';

function App() {

  const [countries, setCountries] = useState();

  useEffect(() => {
    console.log('start');
    let url = 'https://restcountries.eu/rest/v2/all';

    kyc(url, {
        log: 'true',
        timeDiff:'1',
        component:(item)=>
						<Card 
							imgSrc = {item.flag} 
							title = {item.name}
						/>
      }
    ).then(output => {
      setCountries(output);
      console.log(output);
    });
  }, []);

  return (
    <div className="App">
      <h1>KYC Sample with countries</h1>
      {countries}
    </div>
  );
}

export default App;
