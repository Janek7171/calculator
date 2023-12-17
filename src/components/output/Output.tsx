import React from 'react';
import { useContext } from 'react';
import { CalculatorContext } from 'App';
import classes from './output.module.scss';

const Output = () => {
  const context = useContext(CalculatorContext);
  return <div className={classes.output}>{context.output.value}</div>;
};

export default Output;
