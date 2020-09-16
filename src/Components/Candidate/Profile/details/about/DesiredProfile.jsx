import React from 'react'
import { EDIT_DESIRED_PROFILE, EDIT_CAREER_PROFILE } from '../../../../../Utils/AppConst'

export const DesiredProfile = ({showPopup}) => {
  return (
    <div class="bg-white px-4 py-4 section-divider align-items-center">
      <div class="col">
        <div class="mb-4 ml-4">
          <img src="/images/Dashboard-assets/iconfinder_edit.svg" class="float-right" alt="Cinque Terre" onClick={() => showPopup(EDIT_CAREER_PROFILE, true)} />
          <span class="subtitle-semi-bold">Desired Career Profile</span>
        </div>
        <div class="row col-9 px-4">
          <div class="col-4 mb-4">
            <div><span class="font-weight-bold">Employment Type</span></div>
            <span class="small-text-light">Permanent</span>
          </div>
          <div class="col-4 mb-4">
            <div><span class="font-weight-bold">Preferred Locations</span></div>
            <span class="small-text-light">Mumbai, Pune</span>
          </div>
          <div class="col-4 mb-4">
            <div><span class="font-weight-bold">Preferred Shift</span></div>
            <div><span class="small-text-light">Day</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}