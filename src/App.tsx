import React from 'react';
import logo from './logo.svg';
import './App.css';
import BlueButton from "./components/buttons/BlueButton"
import mockData from './dummy.json';
import GreenButton from './components/buttons/GreenButton';
import Table from './components/buttons/Tables/SimpleTables';
import Lists from './components/buttons/Lists/SimpleLists';

function App() {
  return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload {mockData[0].email}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <BlueButton />
        <BlueButton />
        <BlueButton />
        <GreenButton />
        <Table />
        <Lists />
      </header>
    </div>
  );
}

export default App;
