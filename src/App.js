import React from 'react';
import logo from './logo.svg';

import './Assets/css/Style.css'
import UploadProfile from './Components/ProviderComp/UploadProfile';
import Dashboard from './Components/ProviderComp/Dashboard';
import LoginRouter from './Routing/Router';



function App() {
  return (
    <div className="App">
     {/* <UploadProfile/>
     <Dashboard/> */}
     <LoginRouter></LoginRouter>
    </div>
  );
}

export default App;
