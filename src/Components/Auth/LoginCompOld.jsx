import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Header from '../CommonComp/Header'
import Footer from '../CommonComp/Footer' 
import TermsOfUse from '../Auth/TermsOfUse'
import PrivacyPolicy from '../Auth/PrivacyPolicy'
import axios from 'axios'

class LoginComp extends Component{
    constructor(props){
        super(props);
        this.state={
            fields: {},
            errors: {},
            touched: {},
            isChecked:false,
            formSubmitted: false,
            errorMsg:'',
            submitDisabled: true    
          }
            this.onLogin = this.onLogin.bind(this);
        }
       
        handleInputChange(e) {
            let fields = this.state.fields;
           // console.log("dfddf",e.target.name,e.target.value);
            fields[e.target.name] = e.target.value;
            this.setState({
              fields
            });
          }
          
          handleTouch(e){
             let {touched} = this.state;
            if(e.target.name && touched[e.target.name] != true){
                touched[e.target.name] = true;
                 this.setState({
                  touched
                });
              }
            }
          
          
          onChangeCheckbox = event => {
            this.setState({
                isChecked: event.target.checked
            })
          }
          
          onLogin(e) {
            e.preventDefault();
              this.setState({
                formSubmitted: true,
                submitDisabled:false
            });
            if (this.validateForm()) {
                let fields = {};
                fields["emailid"] = "";
                fields["password"] = "";
                this.setState({ fields: fields});
                console.log(this.state.emailid)

              // Adding axios code
                const options = { 
                  headers: { 
                  'Content-Type': 'application/json', 
                  } 
                  };
                axios
                .get( "https://techm-jobzilla.herokuapp.com/jobs/user/login?userName=" + this.state.fields.emailid +"&password="+ this.state.fields.password, options)
                .then(Response=>{
                  if(Response){
                    localStorage.setItem('candidateId',Response.data.responseObject['id'])
                    localStorage.setItem('rememberme',this.state.isChecked)
                    localStorage.setItem('emailId',this.state.isChecked ? Response.data.responseObject['userName'] :'')
                    this.props.history.push('/providerDashboard')
                   
                }
                })
                .catch(error => {
                  console.log(error)
                  this.setState({errorMsg: 'Invalid Email Or Password'})
                })
                
              }
            }

            onSignUp(){
                this.props.history.push('/signup')
            }

          /* Retrive Data from localstorage*/  
          componentDidMount(){
            if(localStorage.rememberme=='true'){
            const email=localStorage.getItem('emailId')
            alert(email)
            this.setState({
                isChecked:true,
            })
            this.state.fields.emailid=email
            }
          }

          /* Retrive Data from localstorage*/  
                  
           /*validate email and password */   
          validateForm() {
            let fields = this.state.fields;
            let errors = {};
            let formIsValid = true;
            //console.log(fields, "fields");
          
            if (!fields["emailid"] ) {
                formIsValid=false
                errors["emailid"] = "*Please enter your email-ID.";
            } 
          
            if (typeof fields["emailid"] !== "undefined" || localStorage.rememberme=='true') {
              //regular expression for email validation
                var pattern = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
                if (!pattern.test(fields["emailid"] )) {
                    formIsValid = true;
                    errors["emailid"] = "*Please enter valid email-ID.";
                }
             }
          
            if (!fields["password"]) {
              formIsValid = false;
              errors["password"] = "*Please enter your password.";
            }
            if (typeof fields["password"] !== "undefined") {
              if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "*Please enter secure and strong password.";
              }
            }
            this.setState({
              errors: errors,
              submitDisabled: !formIsValid
            });
            return formIsValid;
          }
          
          /*validate email and password */   
 
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

        render(){
        this.FloatLabel.init()
          return (
            <div className="container-fluid content pl-0 pr-0">
              <div className="Main_Container row ml-0 " id="main">
                <Header></Header>
		            <div className="Login_Content main">
			            <div className="Login-form">
                        <h1>LOGIN</h1>
				            <h4>Welcome back! Please login to your account</h4>
				              <form className="">
       		                <div id="" className="marT10 float-container form-group pl-0">
                            <label htmlFor="login_email_floatField">Email ID</label>
			 			                <input type="text" id="login_email_floatField" value={this.state.fields.emailid}   name="emailid"  data-placeholder="Email ID" 
                                        onChange={ (e) => {this.handleInputChange(e);this.validateForm();} }
                                        onBlur = {(e) => {this.handleTouch(e);this.validateForm();} } />
                          </div>
                          {this.state.formSubmitted || this.state.touched.emailid?<div className="errorMsg">{this.state.errors.emailid}</div>:''}
			 		                <div id="" className="marT10 float-container form-group pl-0">
                            <label htmlFor="login_pwd_floatField">Password</label>
			 			                <input type="password" id="login_pwd_floatField" value={this.state.fields.password} className=""  name="password" data-placeholder="Password" 
                              onChange={ (e) => {this.handleInputChange(e);this.validateForm();} }
                              onBlur = {(e) => {this.handleTouch(e);this.validateForm();} } />
                          </div>
                          {this.state.formSubmitted || this.state.touched.password ?<div className="errorMsg">{this.state.errors.password}</div> : ''}
                          <div className="errorMsg">{this.state.errorMsg ? <div>{this.state.errorMsg}</div> : null}</div>
                          <div className="row mt-5">
                            <div className="col">                 
                              <label className="remember_me_text mb-0 d-inline-flex align-items-center">
                                <input type="checkbox" className="mr-1"  checked={this.state.isChecked} onChange={this.onChangeCheckbox} name="rememberMe"  /> 
                                Remember me 
                              </label> 
                          </div>
                          <div className="col">
                              <a className="forgot_PWD_Link" href="#">Forgot Password</a>
                          </div>
                        </div>
                       
                        <div className="wid100 float-left mt-5 mb-3" >
                           <button className="btn btn-blue mr-3"  onClick={this.onLogin} disabled={this.state.submitDisabled} value="Register">Login</button>
                            <button className="btn btn-border" onClick={() => this.onSignUp()}>Sign Up</button>
                        </div>
                           
			 		                {/* <h6><a href="">Terms of use.</a><a href=""> Privacy Policy</a></h6> */}
                          <h6 className="terms"><Link to="/termsofUse">Terms of use</Link>.<Link to="/privacyPolicy">Privacy Policy</Link></h6>
			 	              </form>
                  </div>
			            <div className="Login-image d-none d-sm-none d-lg-block">
				              <img src= "../images/login/login-img.png"/>
                  </div>
                  
		            </div>
              </div>
              <Footer></Footer>
            </div>
       //Referance from Login html
       );
      
    }
  }

export default LoginComp





