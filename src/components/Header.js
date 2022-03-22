import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Input from './Input';

function Header() {
  const [nameSearch, setNameSearch] = useState('');

  return (
    <header>
      <h1>Projeto Star Wars - Trybe</h1>
      <Input
        type="text"
        message=""
        id="name-filter"
        value={ nameSearch }
        onChange={ ({ target }) => setNameSearch(target.value) }
      />
    </header>
  );
}

Header.propTypes = {
};

export default Header;
