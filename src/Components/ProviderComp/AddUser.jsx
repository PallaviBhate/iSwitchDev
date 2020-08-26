import React,{ useState } from 'react'
import { Button,Modal } from 'react-bootstrap'
    

  const AddUser = () => {
    const [smShow, setSmShow] = useState(false);
      
    return (
      <>
      {/* Below button is used to call the modal popup .please remove once you call this from manage user */}
        <Button onClick={() => setSmShow(true)}>Small modal</Button>
        
        <Modal
          show={smShow}
          onHide={() => setSmShow(false)}
          
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
             Add user
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <form>
                <div className="form-group">
                  <label htmlFor="userName">Name</label>
                  <input type="text" id="userName" name="userName" placeholder="joe doe" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="userEmail">Official Email</label>
                  <input type="email" id="userEmail" name="userEmail" placeholder="joedoe@example.com" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="userMobile">Mobile/Landline</label>
                  <input type="text" id="userMobile" name="userEmail" placeholder="98500 00000" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="userRole">Role</label>
                  <select id="userRole" className="form-control">
                      <option>Select Role</option>
                      <option>Admin</option>
                      <option>Provider</option>
                      <option>Recruiter</option>
                  </select>
                </div>
                <button class="btn darkBlue float-right px-4">Add User</button>                  
              </form>
          </Modal.Body>
        </Modal>
      
      </>
    );
  }

export default AddUser