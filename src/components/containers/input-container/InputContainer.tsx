import React from 'react';
import OperationButton from 'components/buttons/operation-button/OperationButton';
import NumberButton from 'components/buttons/number-button/NumberButton';
import classes from './input-container.module.scss';

const InputContainer = ({ setOutput }: any) => {
  const buttons = [
    { symbol: 'CE', type: 'operation', operation: 'clear' },
    { symbol: '+/-', type: 'operation', operation: 'negate' },
    { symbol: '%', type: 'operation' },
    { symbol: '÷', type: 'operation' },
    { symbol: '7', type: 'number' },
    { symbol: '8', type: 'number' },
    { symbol: '9', type: 'number' },
    { symbol: '×', type: 'operation' },
    { symbol: '4', type: 'number' },
    { symbol: '5', type: 'number' },
    { symbol: '6', type: 'number' },
    { symbol: '─', type: 'operation' },
    { symbol: '1', type: 'number' },
    { symbol: '2', type: 'number' },
    { symbol: '3', type: 'number' },
    { symbol: '+', type: 'operation' },
    { symbol: '0', type: 'number' },
    { symbol: ',', type: 'operation' },
    { symbol: '=', type: 'operation' },
  ];
  return (
    <div className={classes.inputContainer}>
      {buttons.map((button) => {
        if (button.type === 'operation') {
          return (
            <OperationButton
              symbol={button.symbol}
              operation={button.operation}
              setOutput={setOutput}
            />
          );
        } else
          return <NumberButton symbol={button.symbol} setOutput={setOutput} />;
      })}
    </div>
  );
};

export default InputContainer;
