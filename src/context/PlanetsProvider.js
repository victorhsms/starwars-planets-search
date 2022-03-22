import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';
import getPlanets from '../services/getPlanets';

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');

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

  return (
    <planetsContext.Provider
      value={ {
        planets,
        filterByName: { name },
        changeNameFilter,
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
