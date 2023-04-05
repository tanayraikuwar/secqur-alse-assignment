import React, {useState} from 'react';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  const [maleCount,setMaleCount] =useState(0);
  const[femaleCount,setFemaleCount] =useState(0);

  return (
    <div>
      <Header maleCount={maleCount} femaleCount={femaleCount}/>
      <Home setMaleCount={setMaleCount} setFemaleCount={setFemaleCount} />
    </div>
  );
}

export default App;
