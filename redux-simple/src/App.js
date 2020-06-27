import React from 'react';

import './App.css';

import Interval from './components/Interval';

import Sum from './components/Sum';
import Average from './components/Average';
import Drawn from './components/Drawn';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simple)</h1>

      <div className='line'>
        <Interval/>
      </div>

      <div className='line'>
        <Sum />
        <Average />
        <Drawn />
      </div>
    </div>
  );
}

export default App;
