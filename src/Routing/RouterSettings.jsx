import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginComp from '../Components/Auth/LoginComp'
import Signup from '../Components/Auth/Signup'
import SetPassword from '../Components/Auth/SetPassword'
import ProviderDashboard from '../Components/ProviderComp/ProviderDashboard'
import UploadProfile from '../Components/ProviderComp/UploadProfile'
import TermsOfUse from '../Components/Auth/TermsOfUse'
import PrivacyPolicy from '../Components/Auth/PrivacyPolicy'
 
class RouterSettings extends Component{
  
       render(){ 
  return (
    <Router>
      <div>
          
        <Switch>
        <Route path="/termsOfUse" component={TermsOfUse}/>
        <Route path="/privacyPolicy" component={PrivacyPolicy}/>
        <Route  path="/signup" component={Signup} />
        <Route exact path="/" component={LoginComp} />
        <Route  path="/providerDashboard" component={ProviderDashboard}/>
        <Route path="/uploadProfile" component={UploadProfile}/>

             {/*<Route path="/forgotPassword" component={ForgotPassword}/>
            <Route path="/settingPassword" component={SetPassword}/>
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