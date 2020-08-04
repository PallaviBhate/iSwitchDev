import React from 'react';
import logo from './logo.svg';

import './Assets/css/Style.css'
import UploadProfile from './Components/ProviderComp/UploadProfile';
import Dashboard from './Components/ProviderComp/Dashboard';
import LoginComp from './Components/Auth/LoginComp';

function App() {
  return (
    <div className="App">
     {/* <UploadProfile/>
     <Dashboard/> */}
     <LoginComp></LoginComp>
    </div>
  );
}

export default App;
