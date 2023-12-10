import React from 'react';
import classes from './operation-button.module.scss';

const OperationButton = ({ symbol, operation, setOutput }: any) => {
  const clickHandler = () => {
    switch (operation) {
      case 'clear':
        setOutput('0');
        break;
      case 'negate':
        setOutput((prevOutput: any) => {
          return -prevOutput;
        });
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
