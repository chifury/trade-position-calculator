import React, { useState } from 'react';

const SecondBox = ({ addCustomInstrument }) => {
  const [instrument, setInstrument] = useState('');
  const [contractSize, setContractSize] = useState('');

  const handleAddInstrument = () => {
    if (instrument && contractSize) {
      const newInstrument = { instrument, contractSize: parseFloat(contractSize) };
      addCustomInstrument(newInstrument);
      setInstrument('');
      setContractSize('');
    }
  };

  return (
    <div className="box">
      <h2>Add Custom Instrument</h2>
      <label>Instrument:
        <input 
          type="text" 
          value={instrument} 
          onChange={(e) => setInstrument(e.target.value)}
        />
      </label>
      <label>Contract Size (Units per Lot):
        <input 
          type="number"
          value={contractSize}
          onChange={(e) => setContractSize(e.target.value)}
        />
      </label>
      <button className="button" onClick={handleAddInstrument}>Add Instrument</button>
    </div>
  );
};

export default SecondBox;