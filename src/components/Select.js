import React from 'react';
import PropTypes from 'prop-types';

function Select(props) {
  const { message, options, id, value, onChange } = props;
  return (
    <label htmlFor={ id }>
      {message}
      <select
        data-test-id={ id }
        id={ id }
        value={ value }
        onChange={ onChange }
      >
        {options.map((option) => (
          <option key={ option }>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

Select.propTypes = {
  message: PropTypes.string.isRequired,
  options: PropTypes.arrayOf().isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
