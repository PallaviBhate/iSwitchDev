import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginComp from '../Components/Auth/LoginComp'
import Signup from '../Components/Auth/Signup'
import SetPassword from '../Components/Auth/SetPassword'
import ProviderDashboard from '../Components/ProviderComp/ProviderDashboard'
import UploadProfile from '../Components/ProviderComp/UploadProfile'
import TermsOfUse from '../Components/Auth/TermsOfUse'
import PrivacyPolicy from '../Components/Auth/PrivacyPolicy'
import AddUser from '../Components/ProviderComp/AddUser'
import EmailSetting from '../Components/ProviderComp/EmailSetting'
import ManageUser from "../Components/ProviderComp/ManageUser";
import EditUser from "../Components/ProviderComp/EditUser";
import Profile from "../Components/CommonComp/Profile"
import EditProfile from "../Components/CommonComp/EditProfile"
import Logout from "../Components/Auth/Logout";
import LeftNavCandidate from "../Components/CommonComp/LeftNavCandidate";
import Dashboard from "../Components/Candidate/Dashboard";
import Profile1 from "../Components/Candidate/Profile/Profile1";
import {Profile as CandidateProfile} from "../Components/Candidate/Profile";
// import Invites from "../Components/Candidate/Interviews/Invites";
// import Accepted from "../Components/Candidate/Interviews/Accepted";
import JobOffers from "../Components/Candidate/JobOffers";
import SearchJobs from "../Components/Candidate/SearchJobs";
import RecentMatches from '../Components/Candidate/RecentMatches';
import InterviewInvites from "../Components/Candidate/Interviews/InterviewInvites";
import InvitesJobdetails from "../Components/Candidate/InvitesJobDetails";
//import JobListing from '../Components/Candidate/JobListing';
import AcceptedInterviews from "../Components/Candidate/Interviews/AcceptedInterviews";
//import JobsPipeline from "../Components/Candidate/JobsPipeline";

import RecruiterDashboard from '../Components/RecruiterComp/RecruiterDashboard'

class RouterSettings extends Component {

  render() {
    return (
      <Router>
        <div>

          <Switch>
            <Route path="/termsOfUse" component={TermsOfUse} />
            <Route path="/privacyPolicy" component={PrivacyPolicy} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/" component={LoginComp} />
            <Route path="/providerDashboard" component={ProviderDashboard} />
            <Route path="/uploadProfile" component={UploadProfile} />
            <Route path="/addUser" component={AddUser} />
            <Route path="/editUser" component={EditUser} />
            <Route path="/emailsetting" component={EmailSetting} />
            <Route path="/ManageUser" component={ManageUser} />
            <Route path="/profile" component={Profile} />
            <Route path="/editProfile" component={EditProfile} />
            <Route path="/leftnavcandidate" component={LeftNavCandidate} />
            <Route path="/logout" component={Logout} />


            <Route path="/candidate/dashboard" component={Dashboard} />
            {/* <Route path="/candidate/interviews/invites" component={Invites} />
            <Route path="/candidate/interviews/accepted" component={Accepted} /> */}
            <Route path="/candidate/jobOffers" component={JobOffers} />
            <Route path="/candidate/searchJobs" component={SearchJobs} />
            <Route path="/candidate/profile" component={CandidateProfile} />
            <Route path="/candidate/profile1" component={Profile1} />
            <Route path="/candidate/recentMatches" component={RecentMatches}/>
            <Route path="/candidate/interviews/interviewInvites" component={InterviewInvites}/>
            <Route path="/candidate/invitesJobDetails" component={InvitesJobdetails}/> 
             <Route path="/candidate/interviews/acceptedInterviews" component={AcceptedInterviews}/>
            


            
            <Route path="/recruiterDashboard" component={RecruiterDashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default RouterSettings