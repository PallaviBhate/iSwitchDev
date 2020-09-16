import React from 'react'
import { EDIT_EDUCATION, ADD_NEW_EDUCATION } from '../../../../../Utils/AppConst'

export const Education = ({showPopup}) => {
  return (
    <div class="bg-white px-4 py-4 section-divider align-items-center">
      <div class="col">
        <div class="mb-4 align-items-center">
        
          <img src="/images/Dashboard-assets/education-icon.svg" alt="Cinque Terre" class="mr-2" />
          <span class="subtitle-semi-bold">Education</span>
        </div>
        <div class="px-4 mb-3">
          {[1, 2, 2].map(i => (
            <div class="col-12 px-0 py-3">
              <div>
                <img src="/images/Dashboard-assets/iconfinder_edit.svg" class="float-right" alt="Cinque Terre" onClick={() => showPopup(EDIT_EDUCATION, true)} />
                <span class="subtitle-semi-bold">Maharastra Institute of Technology</span>
              </div>
              <div><span class="normal-text-semi-bold">Bachelor's Degree - (BE) Computer Enginnering</span></div>
              <div><span class="normal-text-light">June 2011</span></div>
            </div>
          ))}
        </div>
        <div class="d-flex flex-row-reverse">
          <button class="btn btn-outline-info btn-add" onClick={() => showPopup(ADD_NEW_EDUCATION, true)}>Add</button>
        </div>
      </div>
    </div>
  )
}