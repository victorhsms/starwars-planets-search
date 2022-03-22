import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';
import getPlanets from '../services/getPlanets';

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');
  const [filters, setFilters] = useState([]);
  const [columnOptions, setColumnOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  useEffect(() => {
    const savePlanetList = async () => {
      const planetList = await getPlanets();
      setPlanets(planetList);
    };
    savePlanetList();
  }, []);

  const changeNameFilter = (newName) => {
    setName(newName);
  };

  const setNewColumnOptions = (newOptions) => {
    setColumnOptions(newOptions);
  };

  const setNewFilter = (newFilter) => {
    setFilters([...filters, newFilter]);
  };

  return (
    <planetsContext.Provider
      value={ {
        planets,
        filterByName: { name },
        filterByNumericValues: filters,
        columnOptions,
        changeNameFilter,
        setNewFilter,
        setNewColumnOptions,
      } }
    >
      {children}
    </planetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf().isRequired,
};

export default PlanetsProvider;
