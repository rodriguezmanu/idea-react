import React from 'react';
import logo from './logo.svg';
import './App.scss';

export const App = () => (
  <div className="App">
    <header className="App-header">
      <img
        src={logo}
        className="App-logo"
        alt="logo"
      />
      <h1 className="App-title">
        {' '} Welcome to React{' '}
      </h1>
      {' '}
    </header>
    <p className="App-intro" />
  </div>
);

export default App;
