import React from 'react';
import classes from './main-container.module.scss';

const MainContainer = ({ children }: any) => {
  return <div className={classes.mainContainer}>{children}</div>;
};

export default MainContainer;
