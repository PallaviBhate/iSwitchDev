import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LoginComp from '../Components/Auth/LoginComp'
import Signup from '../Components/Auth/Signup'
import SetPassword from '../Components/Auth/SetPassword'

class RouterSettings extends Component{
  
       render(){ 
  return (
    <Router>
      <div>
           
        <Switch>
            <Route  path="/signup" component={Signup} />
            <Route exact path="/" component={LoginComp} />
            <Route path="/settingPassword" component={SetPassword}/>
             {/*<Route path="/forgotPassword" component={ForgotPassword}/>
            <Route  path="/providerDashboard" component={ProviderDashboard}/>
            <Route  path="/manageUser" component={ManageUser}/>
            <Route  path="/providerProfile" component={ProviderProfile}/>
            <Route  path="/editProfile" component={EditProfile}/>
            <Route  path="/providerSetting" component={ProviderSetting}/>
            <Route  path="/logout" component={Logout}/> */}
            
            {/* AddProfile will be popup/Component */}
            {/*Change password will be popup/Component*/}
        </Switch>
      </div>
    </Router>
  );
}
}
export default RouterSettings