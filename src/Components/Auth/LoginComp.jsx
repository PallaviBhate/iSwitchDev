import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Header from '../CommonComp/Header'
import Footer from '../CommonComp/Footer' 
import validators from '../CommonComp/ValidateForm'
import TermsOfUse from '../Auth/TermsOfUse'
import PrivacyPolicy from '../Auth/PrivacyPolicy'

class LoginComp extends Component{
    constructor(props){
        super(props);
        this.state={
          userInfo:{
            emailId:'',
            password:'',
            rememberMe:false
          }
        }
        this.validators = validators;
        // This resets our form when navigating between views
         this.resetValidators();

        // Correctly Bind className methods to reacts className instance
        this.handleInputChange = this.handleInputChange.bind(this);
        this.displayValidationErrors = this.displayValidationErrors.bind(this);
        this.updateValidators = this.updateValidators.bind(this);
        this.resetValidators = this.resetValidators.bind(this);
        this.isFormValid = this.isFormValid.bind(this);
      
    }

  //  store data to localstorage and redirect to dashboard
    onLogin = () => {
        const {emailId,password,rememberMe}=this.state
        //api call
        //const respons
        //if(response true){ localStorage.setItem('rememberMe',rememberMe);
        //localStorage.setItem('emailId',rememberMe ? emailId:'')
        //this.props.history.push('/dashboard')}
        //else{error}
        localStorage.setItem('rememberMe',rememberMe);
        localStorage.setItem('emailId',rememberMe ? emailId:'')
        this.props.history.push('/providerDashboard')
    };  
   // store data to localstorage and redirect to dashboard//

    onSignUp=()=>{
      this.props.history.push('/signup')
    }

  //function to retrive data from localstorage
    componentDidMount(){
        const rememberMe=localStorage.getItem('rememberMe')==='true'
        const emailId=rememberMe ? localStorage.getItem('emailId'):''
        this.setState({emailId,rememberMe})
    }
  

    FloatLabel = (() =>{  
      // add active className
        const handleFocus = (e) => {
        const target = e.target;
        target.parentNode.classList.add('active');
        //target.setAttribute('placeholder', target.getAttribute('data-placeholder'));
    };
  
    // remove active className
    const handleBlur = (e) => {
        const target = e.target;
            if(!target.value) {
            target.parentNode.classList.remove('active');
        }
        target.removeAttribute('placeholder');
    };
  
  // register events
    const  bindEvents = (element) => {
        const login_email_floatField = element.querySelector('input');
	      login_email_floatField.addEventListener('focus', handleFocus);
        login_email_floatField.addEventListener('blur', handleBlur);  
	
	      const login_pwd_floatField = element.querySelector('input');
        login_pwd_floatField.addEventListener('focus', handleFocus);
        login_pwd_floatField.addEventListener('blur', handleBlur);
    };
  
  // get DOM elements
    const init = () => {
        const floatContainers = document.querySelectorAll('.float-container');
        floatContainers.forEach((element) => {
            if (element.querySelector('input').value) {
                element.classList.add('active');
            }
        bindEvents(element);
      });
    };
    return {
      init: init
    };
    })();



    rememberMeHandle=(event)=>{
        const input=event.target;
        const value=input.type==='checkbox' ? input.checked :input.value
        this.setState({
            [input.name]:value}, 
        
        );
    }
    
  /*
   * This function is called whenever a form input is changed
   * Which in turn updates the state of this component and validators
   * 
   */

  handleInputChange(event, inputPropName) {
      const newState = Object.assign({}, this.state);
      newState.userInfo[inputPropName] = event.target.value;
      this.setState(newState);
      this.updateValidators(inputPropName, event.target.value);
      const input=event.target;
      const value=input.type==='checkbox' ? input.checked :input.value
      this.setState({
      [input.name]:value});
  }

  /** 
   * This function updates the state of the validator for the specified validator
   */
  updateValidators(fieldName, value) {
      this.validators[fieldName].errors = [];
      this.validators[fieldName].state = value;
      this.validators[fieldName].valid = true;
      this.validators[fieldName].rules.forEach((rule) => {
        if (rule.test instanceof RegExp) {
          if (!rule.test.test(value)) {
            this.validators[fieldName].errors.push(rule.message);
            this.validators[fieldName].valid = false;
          }
        } else if (typeof rule.test === 'function') {
        if (!rule.test(value)) {
          this.validators[fieldName].errors.push(rule.message);
          this.validators[fieldName].valid = false;
        }
      }
    });
  }
  // This function displays the validation errors for a given input field
  displayValidationErrors(fieldName) {
    const validator = this.validators[fieldName];
    const result = '';
    if (validator && !validator.valid) {
      const errors = validator.errors.map((info, index) => {
        return <span className="error" key={index}>* {info}</span>;
      });

      return (
        <div>
          {errors}
        </div>
      );
    }
    return result;
  }

  
  // This function resets all validators for this form to the default state
  resetValidators() {
    Object.keys(this.validators).forEach((fieldName) => {
      this.validators[fieldName].errors = [];
      this.validators[fieldName].state = '';
      this.validators[fieldName].valid = false;
    });
  }
  
  // This method checks to see if the validity of all validators are true
  isFormValid() {
    let status = true;
    if(localStorage.rememberMe==='true'){
        if (!this.validators['password'].valid) {
              status = false;
        }else{
            return status
        }
    }else{
        Object.keys(this.validators).forEach((field) => {
            if (!this.validators[field].valid) {
                status = false;
            }
          }
      );
      return status;
      }
  }
  
  
    render(){
        this.FloatLabel.init()
          return (
            <div className="container-fluid pl-0 pr-0">
              <div className="Main_Container row ml-0" id="main">
                <Header></Header>
		            <div className="Login_Content">
			            <div className="Login-form">
                    <h1>LOGIN</h1>
				            <h4>Welcome back! Please login to your account</h4>
				              <form className="">
                 
			 		              <div id="" className="marT10 float-container form-group pl-0">
                            
			 			                <label htmlFor="login_email_floatField">Email ID</label>
			 			                <input type="text" id="login_email_floatField" value={this.state.emailId} className="form-control" onChange={event => this.handleInputChange(event, 'emailId')} name="emailId" data-placeholder="Email ID" />
			 		              </div>
                            {this.displayValidationErrors('emailId') }
			 		              <div id="" className="marT10 float-container form-group pl-0">
                           
			 			                <label htmlFor="login_pwd_floatField">Password</label>
			 			                <input type="password" id="login_pwd_floatField"  value={this.state.password} onChange={event => this.handleInputChange(event, 'password')} name="password"className="" data-placeholder="Password" />
			 		              </div>
                            {this.displayValidationErrors('password') }
			 		              <div className="col-xl-6 float-left marT20 pl-0">
			 			                  <input type="checkbox" checked={this.state.rememberMe} onChange={this.rememberMeHandle} name="rememberMe" className="" id="" /> 
			 			                  <label className="remember_me_text ml-1">Remember me</label>
			 		                </div>
			 		                <div className="col-xl-6 float-left marT20">
			 			                  <a className="forgot_PWD_Link" href="">Forgot Password</a>
			 		                </div>
			 		                <div className="wid100 float-left marT30 marB20" >
			 			                  <button className=" btn btn_login mr-4" disabled={!this.isFormValid()} onClick={() => this.onLogin()}  name="">Login</button>
			 			                  <button className=" btn btn_login mr-4"onClick={() => this.onSignUp()}  className=" btn btn_signup ml-4"  name="">Sign Up</button>
			 		                </div>
			 		                {/* <h6><a href="">Terms of use.</a><a href=""> Privacy Policy</a></h6> */}
                          <h6><Link to="/termsofUse">Terms of use</Link>.<Link to="/privacyPolicy">Privacy Policy</Link></h6>
			 	              </form>
                  </div>
			            <div className="Login-image d-none d-sm-none d-lg-block">
				              <img src= "../images/login/login-img.png"/>
                  </div>
                  
		            </div>
               <Footer></Footer>
	            </div>
            </div>
       //Referance from Login html
       );
      
    }
  }

export default LoginComp



