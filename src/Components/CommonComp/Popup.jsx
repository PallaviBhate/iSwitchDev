import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap'

class Popup extends Component {

  constructor() {
    super()
    this.state = {
      isPopupShow: true
    }
  }

  showModal = () => {
    const { showPopup } = this.props;
    showPopup();
  }

  render() {
    const { isPopupShow } = this.state;
    const { title, body } = this.props;

    return (
      <>
        <Modal
          show={isPopupShow}
          onHide={() => this.showModal()}
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Header closeButton={false}>
            <Modal.Title class="sub-title modal-title h4" id="contained-modal-title-vcenter">
              <div class="popup-header-row">
                <div className="col">
                  {title}
                </div>
                <div className="col-1 pt-2">
                  <img
                    src="/images/Dashboard-assets/Close-Icon.svg"
                    class="float-right header-close-popup" alt="Cinque Terre"
                    onClick={() => { this.showModal() }}
                  />
                </div>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {body}
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default Popup