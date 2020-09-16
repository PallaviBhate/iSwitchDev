import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../CommonComp/Header'
import Footer from '../CommonComp/Footer'
import TermsOfUse from '../Auth/TermsOfUse'
import PrivacyPolicy from '../Auth/PrivacyPolicy'
import axios from 'axios'

export default class Signup extends Component {
    constructor() {
        super()
        this.state = {
            fields: {},
            errors: {},
            touched: {},
            formSubmitted: false,

        }
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
        // this.isSubmitEnabled = this.isSubmitEnabled.bind(this);
        // this.openNav = this.openNav.bind(this);
        // this.closeNav = this.closeNav.bind(this);
    }
    handleChange = (e) => {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        })
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

    submituserRegistrationForm = (e) => {
        e.preventDefault();
        this.setState({
        formSubmitted: true
        });
        if (this.validateForm()) {
            let fields = {};
            fields["org_name"] = "";
            fields["email"] = "";
            fields["phoneNumber"] = "";
            fields["contactPerson"] = "";
            fields["gstin"] = "";
            fields["password"] = "";
            fields["confirm_password"] = "";
            this.setState({ fields: fields });
            this.setState({
                formSubmitted: false
              });

              // Adding axios code
              const options = { 
                headers: { 
                'Content-Type': 'application/json', 
                } 
                };
              axios
              .post("https://techm-jobzilla.herokuapp.com/jobs/user/signup", this.state.fields, options)
              .then(Response=>{console.log("Success..",Response)
              this.props.history.push('/')})
              .catch(error=>{console.log("Error Occured..",error)})
        	
            alert("You have Signup Successfully");
            
            //console.log(this.state.fields)
            localStorage.setItem('jobzilla',JSON.stringify(this.state.fields));         
          }
    }
    validateForm = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["org_name"]) {
            formIsValid = false;
            errors["org_name"] = "*Please enter organisation name";
        }

        if (typeof fields["org_name"] !== "undefined") {
            if (!fields["org_name"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["org_name"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "*Please enter your official email";
        }

        if (typeof fields["email"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["email"])) {
                formIsValid = false;
                errors["email"] = "*Please enter valid email-ID.";
            }
        }

        if (!fields["mobile"]) {
            formIsValid = false;
            errors["mobile"] = "*Please enter your mobile no.";
        }

        if (typeof fields["mobile"] !== "undefined") {
            if (!fields["mobile"].match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["mobile"] = "*Please enter valid mobile/landline no.";
            }
        }

        if (!fields["contactPerson"]) {
            formIsValid = false;
            errors["contactPerson"] = "*Please enter contact person name";
        }

        if (typeof fields["contactPerson"] !== "undefined") {
            if (!fields["contactPerson"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["org_name"] = "*Please enter alphabet characters only.";
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
        if (!fields["confirm_password"]) {
            formIsValid = false;
            errors["confirm_password"] = "Please enter your confirm password.";
          }
      
          if (typeof fields["password"] !== "undefined" && typeof fields["confirm_password"] !== "undefined") {
              
            if (fields["password"] !== fields["confirm_password"]) {
                formIsValid = false;
              errors["password"] = "Passwords don't match.";
            }
          } 
    
        this.setState({
            errors: errors
        });
        return formIsValid;
    }
    // isSubmitEnabled() {
    //  const fields = this.state.fields;
    //  if(fields){
    //     return true;
    //  }
    //  return false;
    //   }
    // openNav() {
    //  document.getElementById("mySidenav").style.width = "250px";
    //  document.getElementById("hamburger").style.display = "none";
    //  document.getElementById("sidenavOptions").style.display = "block";
    //   }

    //   closeNav() {
    //  document.getElementById("mySidenav").style.width = "70px";
    //  document.getElementById("sidenavOptions").style.display = "none";
    //  document.getElementById("hamburger").style.display = "block";
    //   }

       FloatLabel = (() => {
  
        // add active className
          const handleFocus = (e) => {
          const target = e.target;
          target.parentNode.classList.add('active');
          target.setAttribute('placeholder', target.getAttribute('data-placeholder'));
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
          const bindEvents = (element) => {
          const signup_OrgName_floatField = element.querySelector('input');
          signup_OrgName_floatField.addEventListener('focus', handleFocus);
          signup_OrgName_floatField.addEventListener('blur', handleBlur);  
          
          const signup_email_floatField = element.querySelector('input');
          signup_email_floatField.addEventListener('focus', handleFocus);
          signup_email_floatField.addEventListener('blur', handleBlur);
          
          const signup_mobilenumber_floatField = element.querySelector('input');
          signup_mobilenumber_floatField.addEventListener('focus', handleFocus);
          signup_mobilenumber_floatField.addEventListener('blur', handleBlur);
          
          const signup_name_floatField = element.querySelector('input');
          signup_name_floatField.addEventListener('focus', handleFocus);
          signup_name_floatField.addEventListener('blur', handleBlur);
          
          const signup_gstin_floatField = element.querySelector('input');
          signup_gstin_floatField.addEventListener('focus', handleFocus);
          signup_gstin_floatField.addEventListener('blur', handleBlur);
          
          const signup_pwd_floatField = element.querySelector('input');
          signup_pwd_floatField.addEventListener('focus', handleFocus);
          signup_pwd_floatField.addEventListener('blur', handleBlur);
          
          const signup_cnfpwd_floatField = element.querySelector('input');
          signup_cnfpwd_floatField.addEventListener('focus', handleFocus);
          signup_cnfpwd_floatField.addEventListener('blur', handleBlur);
          
          
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

    render() {
        this.FloatLabel.init();
        const {org_name,email,mobile,contact_person_name,gstin,password,confirm_password} = this.state.fields
        return (
            <div className="content container-fluid pl-0 pr-0">
            <div className="Main_Container content ml-0" id="main">
                <Header></Header>
                <div className="Signup_Content main pl-0 pr-0">
                    <div className="Signup-form float-left col mt-5">
                        <h1 className="mb-0">SIGN UP</h1>
                        <h4>Welcome to Jobzilla</h4>
                        <form className="mt-4" onSubmit={this.submituserRegistrationForm} autoComplete="off">
                            <div className="signUp_left">
                                <div id="" className="marT10 float-container form-group">
                                    <label htmlFor="signup_OrgName_floatField">Organization Name </label>
                                    <input type="text" id="signup_OrgName_floatField" className="" name="org_name"  data-placeholder="Organization Name" value={this.state.fields.org_name} onChange={ (e) => {this.handleChange(e);this.validateForm();} }
                                     onBlur = {(e) => {this.handleTouch(e);this.validateForm();} } />
                                        {
                                            this.state.formSubmitted || this.state.touched.org_name?
                                               <div className="errorMsg">{this.state.errors.org_name}</div>:''                   
                                        }
                                </div>
                                <p></p>
                                
                                <div id="" className="marT10 float-container form-group">
                                    <label htmlFor="signup_email_floatField">Official Email </label>
                                    <input type="text" id="signup_email_floatField" className="" name="email" data-placeholder="Official Email" value={this.state.fields.email} onChange={ (e) => {this.handleChange(e);this.validateForm();} }
                                    onBlur = {(e) => {this.handleTouch(e);this.validateForm();} }  />
                                     {
                                            this.state.formSubmitted || this.state.touched.email?
                                               <div className="errorMsg">{this.state.errors.email}</div>:''                  
                                     }
                                </div>
                                <p></p>
                                
                                <div id="" className="marT10 float-container form-group">
                                    <label htmlFor="signup_mobilenumber_floatField">Mobile/Landline </label>
                                    <input type="number" id="signup_mobilenumber_floatField" className="" name="mobile"  data-placeholder="Mobile/Landline " value={this.state.fields.mobile}  onChange={ (e) => {this.handleChange(e);this.validateForm();} }
                                         onBlur = {(e) => {this.handleTouch(e);this.validateForm();} }   />
                                            {
                                               this.state.formSubmitted || this.state.touched.mobile?
                                               <div className="errorMsg">{this.state.errors.mobile}</div>:''                     
                                           }
                                </div>
                                <p></p>
                                
                                
                                <div id="" className="marT10 float-container form-group">
                                    <label htmlFor="signup_name_floatField">Contact Person's Name </label>
                                    <input type="text" id="signup_name_floatField" className="" name="contactPerson" data-placeholder="Contact Person's Name" value={this.state.fields.contactPerson} onChange={ (e) => {this.handleChange(e);this.validateForm();} } 
                                    onBlur = {(e) => {this.handleTouch(e);this.validateForm();} }   />
                                    {
                                       this.state.formSubmitted || this.state.touched.contactPerson?
                                          <div className="errorMsg">{this.state.errors.contactPerson}</div>:''                     
                                   }
                                </div>
                                <p></p>
                                
                            </div>
                            <div className="signUp_right">
                                <div id="" className="marT10 float-container form-group">
                                    <label htmlFor="signup_gstin_floatField">GSTIN (optional)</label>
                                    <input type="text" id="signup_gstin_floatField" className="" name="gstin"  data-placeholder="GSTIN (optional)" value={this.state.fields.gstin} onChange={ (e) => {this.handleChange(e);this.validateForm();} } 
                                    onBlur = {(e) => {this.handleTouch(e);this.validateForm();} }   />
                                    {
                                       this.state.formSubmitted || this.state.touched.contactPerson?
                                          <div className="errorMsg">{this.state.errors.contactPerson}</div>:''                     
                                    }
                                </div>
                                <div className="errorMsg"></div>

                                <div id="" className="marT10 float-container form-group">
                                    <label htmlFor="signup_pwd_floatField">Password </label>
                                    <input type="password" id="signup_pwd_floatField" className="" name="password" data-placeholder="Password" value={this.state.fields.password}  onChange={ (e) => {this.handleChange(e);this.validateForm();} } 
                                    onBlur = {(e) => {this.handleTouch(e);this.validateForm();} }   />
                                    {
                                       this.state.formSubmitted || this.state.touched.password?
                                          <div className="errorMsg">{this.state.errors.password}</div>:''                    
                                    }
                                </div>
                                <p></p>
                                
                                
                                <div id="" className="marT10 float-container form-group">
                                    <label htmlFor="signup_cnfpwd_floatField">Confirm Password </label>
                                    <input type="password" id="signup_cnfpwd_floatField" className="" name="confirm_password" data-placeholder="Confirm Password" value={this.state.fields.confirm_password} onChange={ (e) => {this.handleChange(e);this.validateForm();} } 
                                    onBlur = {(e) => {this.handleTouch(e);this.validateForm();} }   />
                                    {
                                       this.state.formSubmitted || this.state.touched.password?
                                          <div className="errorMsg">{this.state.errors.password}</div>:''                    
                                    }
                                   </div>
                                <p></p>

                                <div className="float-left marT20">
                                    <input type="checkbox" required/> <span className="remember_me_text pl-2">I agree to terms and conditions and privacy policy of Jobzilla</span>
                                </div>
                                <div className="wid100 float-left marT30 marB20">
                                    <button className="btn btn-blue" name="">Create</button>
                                </div>
                                {/* <h6 className="wid100 float-left">Terms of use. Privacy Policy</h6> */}
                                <h6 className="wid100 float-left terms" ><Link to="/termsofUse">Terms of use</Link>.<Link to="/privacyPolicy">Privacy Policy</Link></h6>
                                
                            </div>
                            <div className="signUpImg">
                                <img src="../images/login/signup-img.png" className="float-right d-none d-sm-none d-lg-block" />
                            </div>                  
                        </form>
                        
                    </div>
                </div>
                <Footer></Footer>
            </div>
            
        </div>
        
        )
    }
}


