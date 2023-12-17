import React from 'react';
import { useContext } from 'react';
import { CalculatorContext } from 'App';
import { output } from 'App';
import classes from './number-button.module.scss';

const NumberButton = ({ symbol }: { symbol: string }) => {
  const context = useContext(CalculatorContext);
  const clickHandler = () => {
    context.setOutput({ type: 'number', payload: symbol });
  };
  return (
    <button className={classes.numberButton} onClick={clickHandler}>
      {symbol}
    </button>
  );
};

export default NumberButton;
