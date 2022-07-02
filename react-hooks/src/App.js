import React from 'react'
import Header from '../src/components/Header.JSX' 
import Characters from './components/Characters';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Characters />
      <h1>Hola Mundo</h1>
    </div>
  );
}

export default App;
