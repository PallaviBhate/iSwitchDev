import React from 'react';
import './Assets/css/Style.css'
import RouterSettings from './Routing/RouterSettings';
import ProviderDashboard from './Components/ProviderComp/ProviderDashboard'

function App() {
  return (
    <div className="App">
     <RouterSettings></RouterSettings>
    {/* <ProviderDashboard/> */}
    </div>
  );
}

export default App;
