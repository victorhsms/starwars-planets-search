import React, { useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import planetsContext from '../context/planetsContext';
import Input from './Input';

function Header() {
  const [nameSearch, setNameSearch] = useState('');

  const { changeNameFilter } = useContext(planetsContext);

  const handleChange = ({ target }) => {
    setNameSearch(target.value);
    changeNameFilter(target.value);
  };

  return (
    <header>
      <h1>Projeto Star Wars - Trybe</h1>
      <Input
        type="text"
        message=""
        id="name-filter"
        value={ nameSearch }
        onChange={ handleChange }
      />
    </header>
  );
}

Header.propTypes = {
};

export default Header;
