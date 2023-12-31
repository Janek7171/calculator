import React, { useReducer, createContext } from 'react';
import './App.css';
import MainContainer from 'components/containers/main-container/MainContainer';
import InputContainer from 'components/containers/input-container/InputContainer';
import Output from 'components/output/Output';

export type output = string | number;

interface state {
  value: string;
  operationString: string;
  lastButton: string;
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
  output: { value: '', operationString: '', lastButton: '' },
  setOutput: () => {},
});

const evaluateOperationString = (operationString: string) => {
  const operationArr: string[] = operationString.split(/([*|/|+])/);
  if (operationArr.length < 3) {
    return operationArr[0];
  }
  let i: number = 0;
  let value: number = 0;
  while (i <= operationArr.length) {
    console.log(operationArr);
    switch (operationArr[i + 1]) {
      case '*':
        value = 0;
        value += +operationArr[i] * +operationArr[i + 2];
        operationArr.splice(i, 3);
        operationArr.unshift(value.toString());
        continue;
      case '/':
        value = 0;
        value += +operationArr[i] / +operationArr[i + 2];
        operationArr.splice(i, 3);
        operationArr.unshift(value.toString());
        continue;
      case '+':
        value = 0;
        value += +operationArr[i] + +operationArr[i + 2];
        operationArr.splice(i, 3);
        operationArr.unshift(value.toString());
        continue;
    }
    i++;
  }
  return Math.round(value * 100) / 100;
};

const reducer = (state: state, action: action) => {
  switch (action.type) {
    case 'clear':
      return { value: '0', operationString: '', lastButton: 'operation' };

    case 'negate':
      console.log(state.operationString);
      return {
        value: -state.value,
        operationString:
          state.lastButton === 'number'
            ? state.operationString.replace(/(\d+)$/, '-$1+')
            : state.operationString,
        lastButton: 'operation',
      };

    case 'percentage':
      return {
        value: +state.value / 100,
        operationString: (+state.operationString / 100).toString(),
        lastButton: 'operation',
      };
    case 'multiply':
      return {
        value: state.value,
        operationString:
          state.lastButton !== 'operation'
            ? state.operationString + '*'
            : state.operationString.replace(/.$/, '*'),
        lastButton: 'operation',
      };
    case 'divide':
      return {
        value: state.value,
        operationString:
          state.lastButton !== 'operation'
            ? state.operationString + '/'
            : state.operationString.replace(/.$/, '/'),
        lastButton: 'operation',
      };
    case 'add':
      return {
        value: state.value,
        operationString:
          state.lastButton !== 'operation'
            ? state.operationString + '+'
            : state.operationString.replace(/.$/, '+'),
        lastButton: 'operation',
      };
    case 'subtract':
      return {
        value: state.value,
        operationString:
          state.lastButton !== 'operation'
            ? state.operationString + '+-'
            : state.operationString.replace(/.$/, '+-'),
        lastButton: 'operation',
      };
    case 'equals':
      const value = evaluateOperationString(state.operationString);
      return {
        value: value.toString(),
        operationString: value.toString(),
        lastButton: 'operation',
      };
    case 'point':
      return {
        value: state.value + '.',
        operationString: state.operationString + '.',
        lastButton: 'number',
      };
    case 'number':
      if (state.value === '0' || state.lastButton === 'operation') {
        return {
          value: action.payload,
          operationString: state.operationString + action.payload,
          lastButton: 'number',
        };
      } else
        return {
          value: state.value + action.payload,
          operationString: state.operationString + action.payload,
          lastButton: 'number',
        };
  }
};

function App() {
  const initialState: state = {
    value: '0',
    operationString: '',
    lastButton: '',
  };
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
