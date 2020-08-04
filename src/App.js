import React from 'react';
import logo from './logo.svg';
import './App.css';
import UploadProfile from './Components/ProviderComp/UploadProfile';
import Dashboard from './Components/ProviderComp/Dashboard';



function App() {
  return (
    <div className="App">
     <h1>Jobzilla</h1>
     <UploadProfile/>
     <Dashboard/>
    </div>
  );
}

export default App;
