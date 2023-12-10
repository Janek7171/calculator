import React from 'react';
import classes from './number-button.module.scss';

const NumberButton = ({ symbol, setOutput }: any) => {
  const clickHandler = () => {
    setOutput((prevOutput: any) => {
      if (prevOutput === '0') return symbol;
      else return prevOutput + symbol;
    });
  };
  return (
    <button className={classes.numberButton} onClick={clickHandler}>
      {symbol}
    </button>
  );
};

export default NumberButton;
