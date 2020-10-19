import { Button,Modal } from 'react-bootstrap'
import React,{ Component } from 'react';
//import axios from 'axios'
//import { Toast } from 'primereact/toast';

class ChangePasswordOrg extends Component{
    constructor(props) {
      super(props);
      this.state = {
        
        fields:{},
        errors: {},
        touched: {},
        show: false,
        formSubmitted: false,
        submitDisabled: true    
      }

      this.handleChange = this.handleChange.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
    }
    showModal = () => {
        this.setState({ 
          fields:{},
          show: true });
          
      }
    
      hideModal = () => {
        this.setState({ show: false });
      }
      handleChange = (e) => {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields,
          submitDisabled:false
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
      onChangePassword = (e) => {
        e.preventDefault();
        this.setState({
          formSubmitted: true,
        });
        if(this.validateForm()){
          let fields = {};
          fields["oldPassword"] = "";
          fields["password"] = "";
          fields["confirmPassword"] = "";
          
          this.setState({ 
            fields: fields,
          });
          
          this.hideModal()
          localStorage.setItem("Jobzilla",JSON.stringify([this.state.fields]))
          window.location.reload()
          alert("Password Updated successfully")
           // Calling Edit user Service from Service file:-  
        //         this.editUserService.putEditUser(this.state.fields)
        //          .then(Response=>{
        //          this.props.history.push('/')})
        //          .catch(error=>{
        //           this.toast.show({severity: 'error', summary: 'Error', detail: 'Server Error '},20000);
        //          })     
        //   this.toast.show({severity: 'success', summary: 'Success Message', detail: 'User is edited Successfully'},20000);
        }
      }    

      validateForm = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["oldPassword"]) {
            formIsValid = false;
            errors["oldPassword"] = "*Please Enter old password";
          }
        if (!fields["password"]) {
          formIsValid = false;
          errors["password"] = "*Please Enter new password";
        }

        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "*Please enter secure and strong password.";
            }
        }

        if (!fields["confirmPassword"]) {
            formIsValid = false;
            errors["confirmPassword"] = "*Please Enter confirm password";
          }

          if (typeof fields["password"] !== "undefined" && typeof fields["confirmPassword"] !== "undefined") {
              
            if (fields["password"] !== fields["confirmPassword"]) {
                formIsValid = false;
              errors["password"] = "Passwords don't match.";
            }
          } 


        this.setState({
            errors: errors,
            submitDisabled: !formIsValid
        });
        return formIsValid;
    }

      render(){
        return (
          <>
          {/* Below button is used to call the modal popup .please remove once you call this from manage user */}
          {/*<Button onClick={() =>this.showModal(true)}>Small modal</Button>*/}
          {/* <Toast ref={(el) => this.toast = el} /> */}
          <Modal className="modal-dialog"
        show={this.state.show}
        onHide={() => this.hideModal(false)}
        aria-labelledby="contained-modal-title-vcenter"> 
          <Modal.Header closeButton>
            <Modal.Title className="sub-title" id="contained-modal-title-vcenter">
            Change Password 
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <form>
                        <div className="row">
                            <div className="col-md-6">
                                {/* Old Password */}
                                <div className="form-group">
                                    <label htmlFor="oldPassword">Old Password</label>
                                    <input type="password" id="oldPassword" className="form-control" name="oldPassword"
                                        value={this.state.fields.oldPassword} onChange={ (e) => {this.handleChange(e);this.validateForm();} }
                                        onBlur = {(e) => {this.handleTouch(e);this.validateForm();} } />
                                        {
                                            this.state.formSubmitted || this.state.touched.oldPassword?<div className="errorMsg">{this.state.errors.oldPassword}</div>:''                   
                                        }
                                </div>

                                  {/* New Password */}
                                  <div className="form-group">
                                    <label htmlFor="password">New Password</label>
                                    <input type="password" id="password" className="form-control" name="password"  value={this.state.fields.password}  onChange={ (e) => {this.handleChange(e);this.validateForm();} } 
                                    onBlur = {(e) => {this.handleTouch(e);this.validateForm();} }   />
                                    {
                                       this.state.formSubmitted || this.state.touched.password?<div className="errorMsg">{this.state.errors.password}</div>:''                    
                                    }
                                </div>
                                {/* Confirm Password */}
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input type="password" id="confirmPassword" className="form-control" name="confirmPassword"  value={this.state.fields.confirmPassword} onChange={ (e) => {this.handleChange(e);this.validateForm();} } 
                                    onBlur = {(e) => {this.handleTouch(e);this.validateForm();} }   />
                                    {
                                       this.state.formSubmitted || this.state.touched.password?
                                          <div className="errorMsg">{this.state.errors.password}</div>:''                    
                                    }
                                </div>

                                <button className="btn btn-blue float-right px-4" disabled={this.state.submitDisabled}  onClick={this.onChangePassword}>Update Password</button> 

                                </div>

                                </div>
                                </form>
          </Modal.Body>
      </Modal>
      </>
    )
  }
}



export default ChangePasswordOrg