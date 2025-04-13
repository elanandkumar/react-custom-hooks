import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TestUseFetch } from './components/use-fetch';
import { TestUseDebounce } from './components/use-debounce';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Hooks Test playground</h3>
      </header>
      <TestUseFetch />
      <TestUseDebounce />
    </div>
  );
}

export default App;
