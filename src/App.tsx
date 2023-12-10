import React from 'react';
import { useState } from 'react';
import './App.css';
import MainContainer from 'components/containers/main-container/MainContainer';
import InputContainer from 'components/containers/input-container/InputContainer';
import Output from 'components/output/Output';

function App() {
  const [outputValue, setOutputValue] = useState('0');
  return (
    <div className="App">
      <MainContainer>
        <Output value={outputValue} />
        <InputContainer setOutput={setOutputValue} />
      </MainContainer>
    </div>
  );
}

export default App;
