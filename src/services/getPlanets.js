const getPlanets = async () => {
  const URL_REQUEST = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const requestApi = await fetch(URL_REQUEST);
  const result = await requestApi.json();
  const planets = result.results;

  return planets;
};

export default getPlanets;
