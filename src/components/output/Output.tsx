import React from 'react';
import { useState } from 'react';
import classes from './output.module.scss';

interface OutputProps {
  value: string;
}

const Output = ({ value }: OutputProps) => {
  return <div className={classes.output}>{value}</div>;
};

export default Output;
