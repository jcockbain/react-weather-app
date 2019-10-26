import React from 'react';

import classes from './temperature.module.css';

const Temperature = (props) => {
  const { degrees } = props;
  return (
    <div className={classes.TemperatureWrapper}>
      {Math.round(degrees)}
      <span className={classes.TemperatureSymbol}>°</span>
    </div>
  );
};

export default Temperature;
