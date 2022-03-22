import React, { useState, useContext } from 'react';
import planetsContext from '../context/planetsContext';
import Input from './Input';
import Select from './Select';
// import PropTypes from 'prop-types';

function Form() {
  const {
    setNewFilter,
    columnOptions,
    setNewColumnOptions,
  } = useContext(planetsContext);
  const [columnFilter, setColumnFilter] = useState(columnOptions[0]);
  const [operator, setOperatorFilter] = useState('maior que');
  const [number, setNumber] = useState(0);

  const submitFilters = (event) => {
    event.preventDefault();

    const filters = {
      column: columnFilter,
      comparison: operator,
      value: number,
    };

    setNewFilter(filters);

    console.log(columnOptions.filter((options) => (
      columnFilter !== options
    )));

    setNewColumnOptions(
      columnOptions.filter((options) => (
        columnFilter !== options
      )),
    );

    setColumnFilter(columnOptions[0]);
    setOperatorFilter('maior que');
    setNumber(0);
  };

  return (
    <form onSubmit={ submitFilters }>
      <Select
        message="Coluna"
        id="column-filter"
        options={ columnOptions }
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
