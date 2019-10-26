import React from 'react';

import classes from './Icon.module.css';
import CloudImg from '../../assets/images/Clouds.svg';

const icon = (props) => {
  const { type } = props;
  return (
    <img
      src={CloudImg}
      alt={type}
      className={classes.Icon}
    />
  );
};

export default icon;