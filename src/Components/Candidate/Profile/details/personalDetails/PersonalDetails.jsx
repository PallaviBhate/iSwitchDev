import React from 'react'
import { EDIT_PERSONAL } from '../../../../../Utils/AppConst'

export const PersonalDetails = ({showPopup}) => {
  return (
    <div class="bg-white px-4 py-4 section-divider align-items-center">
      <div class="col">
        <div class="mb-4 align-items-center">
          <img src="/images/Dashboard-assets/iconfinder_edit.svg" class="float-right" alt="Cinque Terre" onClick={() => showPopup(EDIT_PERSONAL, true)} />
          <img src="/images/Dashboard-assets/profile-icon.svg" alt="Cinque Terre" class="mr-2" />
          <span class="subtitle-semi-bold">Personal Details</span>
        </div>
        <div class="row col-9 px-4">
            <div class="col-4 mb-4">
              <div><span class="font-weight-bold">Date of Birth</span></div>
              <div><span class="small-text-light">4th May, 1993</span></div>
            </div>
            <div class="col-4 mb-4">
              <div><span class="font-weight-bold">Gender</span></div>
              <div><span class="small-text-light">Male</span></div>
            </div>
            <div class="col-4">
              <div><span class="font-weight-bold">Marital Status</span></div>
              <div><span class="small-text-light">Married</span></div>
            </div>
            <div class="col-4 mb-4">
              <div><span class="font-weight-bold">Address</span></div>
              <div><span class="small-text-light">Flat 39 D Navi Mumbai Maharastra</span></div>
            </div>
            <div class="col-4">
              <div><span class="font-weight-bold">Passport ID</span></div>
              <div><span class="small-text-light">LJ24545</span></div>
            </div>
            <div class="col-4">
              <div><span class="font-weight-bold">Work Permit</span></div>
              <div><span class="small-text-light">India US HB</span></div>
            </div>
        </div>
      </div>
    </div>
  )
}