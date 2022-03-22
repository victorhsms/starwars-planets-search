import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';
// import PropTypes from 'prop-types';

function Table() {
  const { planets, filterByName, filterByNumericValues } = useContext(planetsContext);

  const filterMenager = (planet) => {
    const conditions = filterByNumericValues.map((condition) => {
      const { column, comparison, value } = condition;
      let result;
      const numberValue = parseInt(value, 10);
      if (comparison === 'maior que') {
        result = planet[column] > numberValue;
      } else if (comparison === 'menor que') {
        result = planet[column] < numberValue;
      } else {
        const convertedValue = parseInt(planet[column], 10);
        result = convertedValue === numberValue;
      }

      return result;
    });

    const allConditions = [
      planet.name.includes(filterByName.name),
      ...conditions,
    ];

    return allConditions.every((condition) => condition);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {planets.filter((planet) => filterMenager(planet))
          .map((planet) => {
            const {
              name,
              rotation_period: rotationPeriod,
              orbital_period: orbitalPeriod,
              diameter,
              climate,
              gravity,
              terrain,
              surface_water: surfaceWater,
              population,
              films,
              created,
              edited,
              url,
            } = planet;
            return (
              <tr key={ name }>
                <td>{ name }</td>
                <td>{ rotationPeriod }</td>
                <td>{ orbitalPeriod }</td>
                <td>{ diameter }</td>
                <td>{ climate }</td>
                <td>{ gravity }</td>
                <td>{ terrain }</td>
                <td>{ surfaceWater }</td>
                <td>{ population }</td>
                <td>{ films }</td>
                <td>{ created }</td>
                <td>{ edited }</td>
                <td>{ url }</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

Table.propTypes = {

};

export default Table;
