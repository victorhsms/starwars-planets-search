import React from 'react';
import Table from './components/Table';
import Header from './components/Header';
import PlanetsProvider from './context/PlanetsProvider';
import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <Header />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
