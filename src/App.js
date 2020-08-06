import React from 'react';
import './Assets/css/Style.css'
import RouterSettings from './Routing/RouterSettings';
import ProviderDashboard from './Components/ProviderComp/ProviderDashboard'
import UploadProfile from './Components/ProviderComp/UploadProfile';

function App() {
  return (
    <div className="App">
     <RouterSettings></RouterSettings>
    {/* <ProviderDashboard/> */}
    {/* <UploadProfile/> */}
    </div>
  );
}

export default App;
