import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';
import getPlanets from '../services/getPlanets';

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const savePlanetList = async () => {
      const planetList = await getPlanets();
      setPlanets(planetList);
    };
    savePlanetList();
  }, []);
  return (
    <planetsContext.Provider value={ { planets } }>
      {children}
    </planetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf().isRequired,
};

export default PlanetsProvider;
