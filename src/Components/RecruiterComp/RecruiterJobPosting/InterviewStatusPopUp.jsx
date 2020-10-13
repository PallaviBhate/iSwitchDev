import { Button,Modal } from 'react-bootstrap'
import React,{ Component } from 'react';
//import axios from 'axios'
//import { Toast } from 'primereact/toast';
class InterviewStatusPopUp extends Component{
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
      this.onEditStatus = this.onEditStatus.bind(this);
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
      onEditStatus = (e) => {
        e.preventDefault();
        this.setState({
          formSubmitted: true,
        });
        if(this.validateForm()){
          let fields = {};
          fields["InterviewStatus"] = "";
          fields["comments"] = "";
          
          this.setState({ 
            fields: fields,
          });
          //this.state.fields['orgnaizationId'] = localStorage.getItem('organizationId');
          // this.state.fields['supervisorId']=0;
          //this.state.fields['password']= "Test@1234";
          this.hideModal()
          localStorage.setItem("Jobzilla",JSON.stringify([this.state.fields]))
          window.location.reload()
          alert("Interview Status updated successfully")
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

        if (!fields["InterviewStatus"]) {
            formIsValid = false;
            errors["InterviewStatus"] = "*Please select Interview Status";
          }
        if (!fields["comments"]) {
          formIsValid = false;
          errors["comments"] = "*Please enter comments";
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
          <Modal
        show={this.state.show}
        onHide={() => this.hideModal(false)}
        aria-labelledby="contained-modal-title-vcenter"> 
          <Modal.Header closeButton>
            <Modal.Title className="sub-title" id="contained-modal-title-vcenter">
              Edit 
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form>
          
                  <div className="form-group">
                      <label htmlFor="InterviewStatus">Interview Status</label>
                      <select id="InterviewStatus" name="InterviewStatus" className="form-control" value={this.state.fields.InterviewStatus} onChange={ (e) => {this.handleChange(e); this.validateForm()} }
                      onBlur = {(e) => {this.handleTouch(e);this.validateForm();} } >
                      {
                          this.state.formSubmitted ?
                          <div className="errorMsg">{this.state.errors.InterviewStatus}</div>:''                   
                      } 
                          <option value="selected">Selected</option>
                          <option value="rejected">Rejected</option>
                          <option value="offered">Offered</option>
                          <option value="interviewed">Interviewed</option>
                          
                      </select>
                  </div> 
                  
                  <div className="form-group">
                      <label htmlFor="comments">comments</label>
                      <textarea id="comments" name="comments"  className="form-control" value={this.state.fields.comments} onChange={ (e) => {this.handleChange(e);this.validateForm();} }
                      onBlur = {(e) => {this.handleTouch(e);this.validateForm();} } />
                      {
                          this.state.formSubmitted || this.state.touched.comments?
                          <div className="errorMsg">{this.state.errors.comments}</div>:''                   
                      }
                  </div>
                  <button className="btn btn-blue float-right px-4" disabled={this.state.submitDisabled}  onClick={this.onEditStatus}>Save</button> 

            
                  </form>
          </Modal.Body>
      </Modal>
      </>
    );
  }
}



export default InterviewStatusPopUp