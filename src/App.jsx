import React, { useState } from 'react';
import FirstBox from './components/FirstBox';
import SecondBox from './components/SecondBox';
import './App.css'; // For styling

const defaultInstruments = [
  { instrument: 'EUR/USD', pipPointCalc: 10000, contractSize: 100000 },
  { instrument: 'GBP/USD', pipPointCalc: 10000, contractSize: 100000 },
  { instrument: 'AUD/USD', pipPointCalc: 10000, contractSize: 100000 },
  { instrument: 'USD/JPY', pipPointCalc: 100, contractSize: 100000 },
  { instrument: 'NZD/USD', pipPointCalc: 10000, contractSize: 100000 },
  { instrument: 'USD/CHF', pipPointCalc: 10000, contractSize: 100000 },
  { instrument: 'EUR/GBP', pipPointCalc: 10000, contractSize: 100000 },
  { instrument: 'XAU/USD', pipPointCalc: 1, contractSize: 100 },
  { instrument: 'XAG/USD', pipPointCalc: 1, contractSize: 5000 },
  { instrument: 'SP500', pipPointCalc: 1, contractSize: 50 },
  { instrument: 'NAS100', pipPointCalc: 1, contractSize: 20 },
  { instrument: 'GER40', pipPointCalc: 1, contractSize: 25 },
  { instrument: 'USOIL', pipPointCalc: 1, contractSize: 1000 },
  { instrument: 'BTC/USD', pipPointCalc: 1, contractSize: 1 },
  { instrument: 'SOL/USD', pipPointCalc: 1, contractSize: 1 },
  { instrument: 'ETH/USD', pipPointCalc: 1, contractSize: 1 },
];

const App = () => {
  const [customInstruments, setCustomInstruments] = useState(defaultInstruments);

  const addCustomInstrument = (instrument) => {
    setCustomInstruments([...customInstruments, instrument]);
  };

  return (
    <div className="app">
      <div className="boxes-container">
        <FirstBox customInstruments={customInstruments} />
        <SecondBox addCustomInstrument={addCustomInstrument} />
      </div>
    </div>
  );
};

export default App;