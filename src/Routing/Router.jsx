import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginComp from '../Components/Auth/LoginComp'
import SetPassword from '../Components/Auth/SetPassword'

export default function LoginRouter() {
  return (
    <Router>
      <div>
        <Switch>
           
           <Route exact path="/" component={LoginComp} />
            <Route  path="/dashboard" component={SetPassword} />

          {/* <Route exact path="/" component={LoginComp} />
          <Route  path="/dashboard" component={Dashboard} />
          <Route  path="/signup" component={Signup} />
          <Route  path="/login" component={Login} /> */}
         
        {/* 
            for signup component
            <Route exact path="/" component={Signup} />
            <Route  path="/login" component={Login} /> */}
          
        </Switch>
      </div>
    </Router>
  );
}