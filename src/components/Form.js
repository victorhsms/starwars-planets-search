import React, { useState } from 'react';
import Input from './Input';
import Select from './Select';
// import PropTypes from 'prop-types';

function Form() {
  const [columnFilter, setColumnFilter] = useState();
  const [operator, setOperatorFilter] = useState('maior que');
  const [number, setNumber] = useState(0);
  return (
    <form onSubmit={ () => {} }>
      <Select
        message="Coluna"
        id="column-filter"
        options={ [] }
        value={ columnFilter }
        onChange={ ({ target }) => setColumnFilter(target.value) }
      />
      <Select
        message="Operador"
        id="comparison-filter"
        options={ ['maior que', 'menor que', 'igual a'] }
        value={ operator }
        onChange={ ({ target }) => setOperatorFilter(target.value) }
      />
      <Input
        type="number"
        id="value-filter"
        message=""
        value={ number }
        onChange={ ({ target }) => setNumber(target.value) }
      />
      <button
        type="submit"
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </form>
  );
}

Form.propTypes = {

};

export default Form;
