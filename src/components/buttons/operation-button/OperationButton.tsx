import React from 'react';
import { useContext } from 'react';
import { CalculatorContext } from 'App';
import classes from './operation-button.module.scss';

const OperationButton = ({ symbol, operation }: any) => {
  const context = useContext(CalculatorContext);
  const clickHandler = () => {
    switch (operation) {
      case 'clear':
        context.setOutput({ type: 'clear' });
        break;
      case 'negate':
        context.setOutput({ type: 'negate' });
        break;
      case 'percentage':
        context.setOutput({ type: 'percentage' });
        break;
      case 'multiply':
        context.setOutput({ type: 'multiply' });
        break;
      case 'equals':
        context.setOutput({ type: 'equals' });
        break;
    }
  };
  return (
    <button className={classes.operationButton} onClick={clickHandler}>
      {symbol}
    </button>
  );
};

export default OperationButton;
