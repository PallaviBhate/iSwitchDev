import { Card } from 'primereact/card';
import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
// import {CircularProgressbar,buildStyles} from 'react-circular-progressbar'
import ProgressBar from 'react-customizable-progressbar'
import RecruiterService from '../../Services/RecruiterService.js';
import { TabMenu } from 'primereact/tabmenu';
import LeftNavProvider from '../CommonComp/LeftNavProvider'
import { Dropdown } from 'primereact/dropdown';
import HeaderAll from '../CommonComp/HeaderAll';
import JobPostingCollection from "../RecruiterComp/RecruiterJobPosting/JobPostingCollection"

import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import CreateJob from './CreateJob.jsx';

class ActiveJob extends Component{
  constructor(){
        super();
        this.state={
            customer:[],
            customerData:[],    //original reference data
            job:[],
            search:'',
            searchjob:'',
           
            
          ShowMe:true
        }
        this.RecruiterService = new RecruiterService();

    }
    updateSearch(e){
      this.setState({search:e.target.value})
    }
    updateJobSearch(e){
      this.setState({searchjob:e.target.value})
    }
    
    
    componentDidMount() {
        this.setState({ loading: true });

        this.RecruiterService.getCustomersLarge().then(data => {
            this.setState({
                customer: data.data.data,
                customerData:data.data.data,
                // loading: false
            },()=>{console.log(this.state)});
            // console.log(data)
            const { activity} = this.state;

    // activity = customer.map(p => p.act.substr(3));
    // this.setState({ activity })
        });

        this.RecruiterService.getCustomersXLarge().then(data => {
          this.setState({
              job: data.data.data,
              customerData:data.data.data,
              // loading: false
          },()=>{console.log(this.state)});
          // console.log(data)
      });
        
        
    }
    // sortAscending = () => {
    //   const { activity } = this.state;
    //   activity.sort((a, b) => a - b)    
    //   this.setState({ activity })
    // }
  
    // sortDescending = () => {
    //   const { prices } = this.state;
    //   prices.sort((a, b) => a - b).reverse()
    //   this.setState({ prices })
    // }
  

    cardDelete(task, index){
      if(window.confirm("Are you sure you want to delete this task?")){
         let customer = [...this.state.customer]
         customer.splice(index, 1);
         this.setState({customer: customer})
      }
   }

   jobDelete(task, index){
    if(window.confirm("Are you sure you want to delete this task?")){
       let job = [...this.state.job]
       job.splice(index, 1);
       this.setState({job: job})
    }
 }
  
render(){


let filterData=this.state.customer.filter(
  (data)=>{
    return(data.location.toLowerCase().includes(this.state.search.toLowerCase())||data.name.toLowerCase().includes(this.state.search.toLowerCase()) ) 
  }
);
let filterJobData=this.state.job.filter(
  (data)=>{
    return(data.location.toLowerCase().includes(this.state.searchjob.toLowerCase())||data.name.toLowerCase().includes(this.state.searchJob.toLowerCase()) ) 
  }
);

   let progress = this.state.customer.activity;
  const cities = [
    {name: 'Date', code: 'NY'},
    {name: 'Time', code: 'RM'},
    {name: 'ShortFall', code: 'LDN'},
    {name: 'Unfulfilled', code: 'IST'}
    
]
    
  
    return(
        <div>
          <LeftNavProvider></LeftNavProvider>
          <div className="maincontent">
          <HeaderAll></HeaderAll>
        <div className="container-fluid">
            <div className="row">
         <div className="col-sm-6">
            <h5 id="heading">
            Active Jobs
          </h5>
          <h7 id="detail">You have 2 active jobs,View <span className="closed">CLOSED</span></h7>
          
          </div>
          <div>
            
          </div>
          <div className="col-sm-6">
            {/* <CreateJob></CreateJob> */}
           <Link to= "createJob" class="btn btn-primary" >Create New Job</Link>   
          {/* <button type="button" class="btn btn-primary" onClick="./CreateJob.jsx">Create New Job</button> */}
          </div>
          </div>
          
          <div id="main" className="col" >
            <div className="row ">

            <div className="col-md-6">
          <div className="p-input-icon-right">
          <i className="pi pi-search" />
            <InputText  type="text"
            
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
            placeholder="search by Job Title,Location,Skills"
            
            />
           
            </div>
            </div>
            <div className="col-md-6 ">
            <Dropdown optionLabel="name" value={this.state.city} options={cities} onChange={(e) => {this.setState({city: e.value})}} placeholder="Sort By"/>
            </div>
            </div>
            <hr></hr>
          
          
          <div className="job-title-header">
                          <span className="mr-3 job-title-text" id="designation">Sr. Software Engineer</span>
                          <span className="job-posted-time-text">Posted 1 day ago</span>
                        </div>
         
         <div className="job-content d-flex-left justify-content">
                          <span className="mr-4 job-content-attributes"><i className="pi pi-list mr-2" aria-hidden="true"></i>Development</span>
                          <span className="mr-4 job-content-attributes"><i className="pi pi-fw pi-calendar mr-2" aria-hidden="true"></i>5-6 years</span>
                          <span className="mr-4 job-content-attributes"><i className="pi pi-fw pi-clock mr-2" aria-hidden="true"></i>Full Time</span>
                          <span className="mr-4 job-content-attributes"><i className="pi pi-fw pi-map-marker mr-2" aria-hidden="true"></i>Mumbai, India</span>
                          <span className="mr-4 job-content-attributes"><i className="pi pi-fw pi-cog mr-2" aria-hidden="true"></i>React js</span>
                          <span className="mr-4 job-content-attributes"><i className="pi pi-fw pi-users mr-2" aria-hidden="true"></i>2</span>
                        </div>
                        

         <div className="row">  
        {filterData.map((data,index )=>
        <div className="col-md-4 active-job" >
			
				    
					<Card className="custom" key={index}   >
                    <div className="row">
                    <div id="location" className="col-md-8">
                        <h5 id="name">{data.name}</h5>
                        <p id="body">{data.company}</p>	
                        <hr></hr>					
						<i className="pi pi-map-marker"></i>{data.location}	
                        </div>
                        <div className="col-md-4">
					<ProgressBar className="circle"
						progress={data.activity}
						radius={32}
						strokeWidth={3}
						strokeColor="#147AD6"
						steps={100}
						cut={0}
						trackStrokeWidth={6}
						progress={data.activity}>
						<div className="indicator">
							<div>{data.activity}%
							Match</div>
                           
					
						</div>
					</ProgressBar> 
				</div>
        				
                </div>	
                <div className="row pt-4" >
                    <div className="col-md-6 p-0 ">
                <button type="button" id="header" className="btn w-100 btn-blue  " >Invite</button>
                </div>
                <div className="col-md-6 p-0 w-100">
			<button type="button" id="notNow" className="btn w-100  "  onClick={(e)=>{     
             e.preventDefault();
             
			 this.cardDelete(data, index);}}>Not Now</button>
             </div>
			</div>	
                 
					</Card>
					
				
                
           
				
             </div>	 
		  )}
      
     
     
     </div> 
     <div className="text-right py-5" >
    <Link to = "JobPostingCollection" >VIEW DETAILS</Link>
    
  </div>
  <hr></hr>
     <div className="job-title-header ">
                          <span className="mr-3 job-title-text" id="designation">Java Developer</span>
                          <span className="job-posted-time-text">Posted 2 day ago</span>
                        </div>
        
         <div className="job-content d-flex-left">
                          <span className="mr-4 job-content-attributes"><i className="pi pi-list mr-2" aria-hidden="true"></i>Development</span>
                          <span className="mr-4 job-content-attributes"><i className="pi pi-fw pi-calendar mr-2" aria-hidden="true"></i>5-6 years</span>
                          <span className="mr-4 job-content-attributes"><i className="pi pi-fw pi-clock mr-2" aria-hidden="true"></i>Full Time</span>
                          <span className="mr-4 job-content-attributes"><i className="pi pi-fw pi-map-marker mr-2" aria-hidden="true"></i>Mumbai, India</span>
                          <span className="mr-4 job-content-attributes"><i className="pi pi-fw pi-cog mr-2" aria-hidden="true"></i>Java ,J2EE</span>
                          <span className="mr-4 job-content-attributes"><i className="pi pi-fw pi-users mr-2" aria-hidden="true"></i>2</span>
                        </div>
         <div className="row">  
        {filterJobData.map((data,index )=>
        <div className="col-md-4 active-job" >
			
				    
					<Card className="custom" key={index}   >
                    <div className="row">
                    <div id="location" className="col-md-8">
                        <h5 id="name">{data.name}</h5>
                        <p id="body">{data.company}</p>	
                        <hr></hr>					
						<i className="pi pi-map-marker"></i>{data.location}	
                        </div>
                        <div className="col-md-4">
					<ProgressBar className="circle"
						progress={data.activity}
						radius={32}
						strokeWidth={3}
						strokeColor="#147AD6"
						steps={100}
						cut={0}
						trackStrokeWidth={6}
						progress={data.activity}>
						<div className="indicator">
							<div>{data.activity}%
							Match</div>
                           
					
						</div>
					</ProgressBar> 
				</div>
                </div>	
                <div className="row pt-4">
                    <div className="col-md-6 p-0">
                <button type="button" id="header" className="btn w-100 btn-blue " >Invite</button>
                </div>
                <div className="col-md-6 p-0">
			<button type="button" id="notNow" className="btn w-100 "  onClick={(e)=>{     
             e.preventDefault();
             
			 this.jobDelete(data, index);}}>Not Now</button>
             </div>
			</div>					  
					</Card>
                    
					
				
                
           
				
             </div>	 
		  )}
     
     </div>   
     
     
  </div>
  <div className="text-right py-5">
    <Link to="/JobPostingCollection">VIEW DETAILS</Link>
    
  </div>
  
  
</div>
</div>
</div>

    )
}

}
export default ActiveJob