import { Button,Modal } from 'react-bootstrap'
import React,{ Component } from 'react';
import {Messages} from 'primereact/messages'
import Toast from 'light-toast';
import axios from 'axios'
class AddUser extends Component{
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
      touched: {},
      show: false,
      formSubmitted: false,
      submitDisabled: true    
    }
    this.onAddUser = this.onAddUser.bind(this);
    this.showSuccess = this.showSuccess.bind(this);
    this.showError = this.showError.bind(this);
  }
/**Show toaster message */
showSuccess= () =>  {
  this.messages.show ({severity: 'success', summary: 'User Added Successfully..', detail: ''});
}
showError= (e) => {
  this.messages.show({severity: 'error', summary: 'Something went wrong..', detail: ''});
}
 /**Show toaster message */

  
  showModal = () => {
    this.setState({ show: true });
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

  onAddUser = (e) => {
    e.preventDefault();
    this.setState({
      formSubmitted: true,
    });
    if(this.validateForm()){
      let fields = {};
      fields["userName"] = "";
      fields["email"] = "";
      fields["contactNumber"] = "";
      fields["userRole"] = "";
      this.setState({ 
        fields: fields,
      });
        // Adding axios code
          const options = { 
            headers: { 
            'Content-Type': 'application/json', 
            } 
            };
          axios
         .post("https://techm-jobzilla.herokuapp.com/jobs/user/user", this.state.fields, options)
         .then(Response=>{console.log("Success..",Response)
         this.hideModal()
         window.location.reload()
          }
          )
         
         .catch(error=>{console.log("Error Occured..",error)})
        //  this.showSuccess()
         Toast.info("User Added Successfully")
         localStorage.setItem("hobzilla",JSON.stringify(this.state.fields))
    }
    
    }
    
  validateForm = () => {
    let fields = this.state.fields;
    let role=this.state.role
    let errors = {};
    let formIsValid = true;
    if (!fields["userName"]) {
      formIsValid = false;
      errors["userName"] = "*Please enter  name";
    }

    if (typeof fields["userName"] !== "undefined") {
      if (!fields["userName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["userName"] = "*Please enter alphabet characters only.";
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

    if (!fields["contactNumber"]) {
      formIsValid = false;
      errors["contactNumber"] = "*Please enter your mobile no.";
    }

    if (typeof fields["contactNumber"] !== "undefined") {
      if (!fields["contactNumber"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["contactNumber"] = "*Please enter valid mobile/landline no.";
      }
    }
    if (!fields["userRole"]) {
      formIsValid = false;
      errors["userRole"] = "*Please select user role";
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
       {/* <Button onClick={() =>this.showModal(true)}>Small modal</Button>  */}
      <Modal
        show={this.state.show}
        onHide={() => this.hideModal(false)}
        aria-labelledby="contained-modal-title-vcenter"> 
          <Modal.Header closeButton>
            <Modal.Title className="sub-title" id="contained-modal-title-vcenter">
              Add user
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form>
                  <div className="form-group">
                  <Messages ref={(el) => this.messages = el} />
                      <label htmlFor="userName">Name</label>
                      <input type="text" id="userName" name="userName" placeholder="joe doe" className="form-control"   onChange={ (e) => {this.handleChange(e);this.validateForm();} } 
                      onBlur = {(e) => {this.handleTouch(e);this.validateForm();} } />
                      {
                          this.state.formSubmitted || this.state.touched.userName?
                          <div className="errorMsg">{this.state.errors.userName}</div>:''                   
                      }
                  </div>
                  
                  <div className="form-group">
                      <label htmlFor="userEmail">Official Email</label>
                      <input type="email" id="email" name="email" placeholder="joedoe@example.com" className="form-control"   onChange={ (e) => {this.handleChange(e);this.validateForm();} }
                      onBlur = {(e) => {this.handleTouch(e);this.validateForm();} } />
                      {
                          this.state.formSubmitted || this.state.touched.userEmail?
                          <div className="errorMsg">{this.state.errors.userEmail}</div>:''                   
                      }
                  </div>
                   
                  <div className="form-group">
                      <label htmlFor="userMobile">Mobile/Landline</label>
                      <input type="text" id="contactNumber" name="contactNumber" placeholder="98500 00000" className="form-control"   onChange={ (e) => {this.handleChange(e);this.validateForm();} }
                      onBlur = {(e) => {this.handleTouch(e);this.validateForm();} } />
                      {
                          this.state.formSubmitted || this.state.touched.contactNumber?
                          <div className="errorMsg">{this.state.errors.contactNumber}</div>:''                   
                      }
                  </div>
                     
                  <div className="form-group">
                      <label htmlFor="userRole">Role</label>
                      <select id="userRole" name="userRole" className="form-control"  onChange={ (e) => {this.handleChange(e); this.validateForm()} }
                      onBlur = {(e) => {this.handleTouch(e);this.validateForm();} } >
                      {
                          this.state.formSubmitted ?
                          <option className="errorMsg">{this.state.errors.userRole}</option>:''                   
                      }
                      <option>Select Role</option>
                      <option>Admin</option>
                      <option>User</option>
                      {/* <option>Recruiter</option> */}
                      </select>
                  </div> 
                  
                  <button className="btn darkBlue float-right px-4" disabled={this.state.submitDisabled}  onClick={this.onAddUser}>Add User</button> 
                  
          </form>


        
          </Modal.Body>
      </Modal>
      </>
    );
  }
}

export default AddUser