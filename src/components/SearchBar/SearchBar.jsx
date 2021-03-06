import React from 'react';

import classes from './SearchBar.module.css';
import InputField from '../../elements/InputField/InputField';
import Button from '../../elements/Button/Button';

const searchBar = ({
  value, onChangeHandler, onClickHandler, error,
}) => (
  <div className={classes.SearchBarWrapper}>
    <InputField
      type="text"
      name="city"
      label="Location"
      placeholder="Enter a city"
      value={value}
      handleChange={onChangeHandler}
      error={error}
    />
    <Button name="searchSubmit" type="submit" position="onForm" clicked={onClickHandler}>
      Set
    </Button>
  </div>
);

export default searchBar;
