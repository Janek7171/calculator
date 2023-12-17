import React, { useReducer, createContext } from 'react';
import './App.css';
import MainContainer from 'components/containers/main-container/MainContainer';
import InputContainer from 'components/containers/input-container/InputContainer';
import Output from 'components/output/Output';

export type output = string | number;

interface state {
  lastValue?: string;
  symbol?: string;
  value: string;
}

interface action {
  type: string;
  payload?: string;
}

export interface ctxValue {
  output: state;
  setOutput: React.Dispatch<React.ReducerAction<React.Reducer<state, action>>>;
}

export const CalculatorContext = createContext<ctxValue>({
  output: { value: '' },
  setOutput: () => {},
});

const reducer = (state: state, action: action) => {
  switch (action.type) {
    case 'clear':
      return { value: '0' };
    case 'negate':
      return { value: -state.value };
    case 'percentage':
      return { value: +state.value / 100 };
    case 'multiply':
      return { lastValue: state.value, symbol: '*', value: '0' };
    case 'equals':
      if (state.symbol && state.lastValue) {
        switch (state.symbol) {
          case '*':
            return {
              value: +state.lastValue * +state.value,
            };
        }
        break;
      } else return state;

    case 'number':
      if (state.value === '0' || state.lastValue === '0') {
        return {
          lastValue: state?.lastValue,
          symbol: state?.symbol,
          value: action.payload,
        };
      } else
        return {
          lastValue: state?.lastValue,
          symbol: state?.symbol,
          value: state.value + action.payload,
        };
  }
};

function App() {
  const initialState: state = { value: '0' };
  const [outputValue, dispatch] = useReducer(
    reducer as React.Reducer<state, action>,
    initialState as state
  );
  const contextValue: ctxValue = {
    output: outputValue,
    setOutput: dispatch,
  };
  return (
    <CalculatorContext.Provider value={contextValue}>
      <div className="App">
        <MainContainer>
          <Output />
          <InputContainer />
        </MainContainer>
      </div>
    </CalculatorContext.Provider>
  );
}

export default App;
