import React from 'react';
import Table from './components/Table';
import Header from './components/Header';
import Form from './components/Form';
import PlanetsProvider from './context/PlanetsProvider';
import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <Header />
      <Form />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
