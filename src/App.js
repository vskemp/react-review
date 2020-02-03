import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Counter from './Counter';

function App() {
  return (
    <div>
      <Counter 
        changeBy={2}
        initialValue={10}/>
      <Counter 
        changeBy={3}
        initialValue={99}/>
      <Counter 
        changeBy={-4}
        initialValue={5}/>
      <Greet
      whom="Cthulu"
      how="Salutations" />   
      <Greet
      whom="Chris"
      how="Howdy" /> 
    </div>
  );
}

export default App;
