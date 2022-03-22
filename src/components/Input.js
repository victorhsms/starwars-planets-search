import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const { type, id, message, value, onChange } = props;
  return (
    <label htmlFor={ id }>
      { message }
      <input
        type={ type }
        id={ id }
        data-testid={ id }
        value={ value }
        onChange={ onChange }
      />
    </label>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
