import React, { useState } from 'react';

const FirstBox = ({ customInstruments }) => {
  const [instrument, setInstrument] = useState('');
  const [contractSize, setContractSize] = useState(100000);
  const [accountBalance, setAccountBalance] = useState('');
  const [entryPrice, setEntryPrice] = useState('');
  const [stopLossPrice, setStopLossPrice] = useState('');
  const [riskPercentage, setRiskPercentage] = useState('');
  const [results, setResults] = useState({ lots: '0.000', units: '0.000', moneyAtRisk: '0.00' });

  const handleInstrumentChange = (e) => {
    const selectedInstrument = customInstruments.find(instrument => instrument.instrument === e.target.value);
    if (selectedInstrument) {
      setContractSize(selectedInstrument.contractSize);
    } else {
      setContractSize(100000);
    }
    setInstrument(e.target.value);
  };

  const formatNumber = (num, decimalPlaces = 2) => {
    return num.toFixed(decimalPlaces).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const calculatePositionSize = () => {
    const parsedAccountBalance = parseFloat(accountBalance);
    const parsedEntryPrice = parseFloat(entryPrice);
    const parsedStopLossPrice = parseFloat(stopLossPrice);
    const parsedRiskPercentage = parseFloat(riskPercentage);
    const parsedContractSize = parseFloat(contractSize);

    // Calculate the distance between entry price and stop loss
    const stopLossDistance = Math.abs(parsedEntryPrice - parsedStopLossPrice);
    
    // Calculate risk amount
    const riskAmount = (parsedAccountBalance * parsedRiskPercentage) / 100;
    
    // Calculate lot size
    const lotSize = riskAmount / (stopLossDistance * parsedContractSize);
    const units = lotSize * parsedContractSize;

    console.log('Account Balance:', parsedAccountBalance);
    console.log('Risk Percentage:', parsedRiskPercentage);
    console.log('Risk Amount:', riskAmount);
    console.log('Entry Price:', parsedEntryPrice);
    console.log('Stop Loss Price:', parsedStopLossPrice);
    console.log('Stop Loss Distance:', stopLossDistance);
    console.log('Lot Size:', lotSize);
    console.log('Units:', units);

    setResults({
      lots: lotSize.toFixed(3),
      units: formatNumber(units, 3),
      moneyAtRisk: formatNumber(riskAmount, 2)
    });
  };

  return (
    <div className="box">
      <h2>Position Size Calculator</h2>
      <label>Instrument (market pair):
        <select value={instrument} onChange={handleInstrumentChange}>
          <option value="">Select Instrument</option>
          {customInstruments.map((instr, index) => (
            <option key={index} value={instr.instrument}>{instr.instrument}</option>
          ))}
        </select>
      </label>
      <label>Contract Size (Units per Lot):
        <input type="number" value={contractSize} onChange={(e) => setContractSize(e.target.value)} />
      </label>
      <label>Account Balance:
        <input type="number" value={accountBalance} onChange={(e) => setAccountBalance(e.target.value)} />
      </label>
      <label>Entry Price:
        <input type="number" value={entryPrice} onChange={(e) => setEntryPrice(e.target.value)} />
      </label>
      <label>Stop Loss Price:
        <input type="number" value={stopLossPrice} onChange={(e) => setStopLossPrice(e.target.value)} />
      </label>
      <label>Risk %
        <input type="number" value={riskPercentage} onChange={(e) => setRiskPercentage(e.target.value)} />
      </label>
      <button className="button" onClick={calculatePositionSize}>Calculate</button>
      <div>
        <h3>Results</h3>
        <p>Units (trade size): <span>{results.units}</span></p>
        <p>Lots (trade size): <span className="bold-yellow">{results.lots}</span></p>
        <p>Money at Risk $: <span className="bold-blue">{results.moneyAtRisk}</span></p>
      </div>
    </div>
  );
};

export default FirstBox;