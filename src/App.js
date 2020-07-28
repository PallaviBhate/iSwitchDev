import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginComp from './Components/Auth/LoginComp'

function App() {
  return (
    <div className="App">
     <h1>Jobzilla</h1>
     <LoginComp></LoginComp>
    </div>
  );
}

export default App;
