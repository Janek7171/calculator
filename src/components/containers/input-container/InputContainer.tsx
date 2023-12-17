import React from 'react';
import OperationButton from 'components/buttons/operation-button/OperationButton';
import NumberButton from 'components/buttons/number-button/NumberButton';
import buttons from 'components/consts';
import classes from './input-container.module.scss';

const InputContainer = ({ setOutput }: any) => {
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
        } else return <NumberButton symbol={button.symbol} />;
      })}
    </div>
  );
};

export default InputContainer;
