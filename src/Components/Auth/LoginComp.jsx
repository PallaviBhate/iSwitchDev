import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from '../CommonComp/Header'
import validators from '../CommonComp/ValidateForm'


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

        // Correctly Bind class methods to reacts class instance
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
        this.props.history.push('/settingPassword')
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
      // add active class
        const handleFocus = (e) => {
        const target = e.target;
        target.parentNode.classList.add('active');
        //target.setAttribute('placeholder', target.getAttribute('data-placeholder'));
    };
  
    // remove active class
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
  
      if (!this.validators['password'].valid) {
        status = false;
      }
    return status;
  }
  

  
    render(){
        this.FloatLabel.init()
          return (
            <div class="container-fluid pl-0 pr-0">
              <div class="Main_Container row ml-0" id="main">
                <Header></Header>
		            <div class="Login_Content">
			            <div class="Login-form">
                    <h1>LOGIN</h1>
				            <h4>Welcome back! Please login to your account</h4>
				              <form class="">
                 
			 		              <div id="" class="marT10 float-container form-group pl-0">
                            {this.displayValidationErrors('emailId') }
			 			                <label for="login_email_floatField">Email ID</label>
			 			                <input type="text" id="login_email_floatField" value={this.state.emailId} className="form-control" onChange={event => this.handleInputChange(event, 'emailId')} name="emailId" class=""   data-placeholder="Email ID" />
			 		              </div>
			 		              <div id="" class="marT10 float-container form-group pl-0">
                            {this.displayValidationErrors('password') }
			 			                <label for="login_pwd_floatField">Password</label>
			 			                <input type="password" id="login_pwd_floatField"  value={this.state.password} onChange={event => this.handleInputChange(event, 'password')} name="password"class="" data-placeholder="Password" />
			 		              </div>
			 		              <div class="col-xl-6 float-left marT20 pl-0">
			 			                  <input type="checkbox" checked={this.state.rememberMe} onChange={this.rememberMeHandle} name="rememberMe" class="" id="" /> 
			 			                  <label class="remember_me_text ml-1">Remember me</label>
			 		                </div>
			 		                <div class="col-xl-6 float-left marT20">
			 			                  <a class="forgot_PWD_Link" href="">Forgot Password</a>
			 		                </div>
			 		                <div class="wid100 float-left marT30 marB20" >
			 			                  <button class=" btn btn_login mr-4"onClick={() => this.onLogin()} disabled={!this.isFormValid()} name="">Login</button>
			 			                  <Link to = '/signup' class=" btn btn_signup ml-4"  name="">Sign Up</Link>
			 		                </div>
			 		                <h6><a href="">Terms of use.</a><a href=""> Privacy Policy</a></h6>
			 	              </form>
                  </div>
			            <div class="Login-image d-none d-sm-none d-lg-block">
				              <img src= "../images/login/login-img.png"/>
                  </div>
                  
		            </div>
                <footer class="login_Signup_footer">
                      <p class="text-center">Copyright &copy; 2020 | Jobzilla Pvt. Ltd.</p>
                  </footer>
	            </div>
            </div>
       //Referance from Login html
       );
      
    }
  }

export default LoginComp



