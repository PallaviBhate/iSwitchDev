import React from 'react'
import { EDIT_CERTIFICATE,ADD_NEW_CERTIFICATE } from '../../../../../Utils/AppConst'

export const Certifications = ({showPopup}) => {
  return (
    <div class="bg-white px-4 py-4 section-divider align-items-center">
      <div class="col">
        <div class="mb-4">
          <span class="subtitle-semi-bold ml-4">Certifications</span>
        </div>
        <div class="px-4 mb-3">
          {[1, 2, 2].map(i => (
            <div class="col-12 px-0 py-3">
              <div>
                <img src="/images/Dashboard-assets/iconfinder_edit.svg" class="float-right" alt="Cinque Terre" onClick={() => showPopup(EDIT_CERTIFICATE, true)} />
                <span class="subtitle-semi-bold">User Experience Design</span>
              </div>
              <div><span class="normal-text-semi-bold">Form Certifications TCS</span></div>
              <p class="normal-text-light mb-0">Quisque congue dignissim efficitur. Vestibulum ultrices pulvinar ex, a dignissim neque tincidunt sed.</p>
              <div><span class="normal-text-light">Issued on May 2020 | No Expiration Date</span></div>
              <div><span class="normal-text-light">Credential ID 1544545541212</span></div>
            </div>
          ))}
        </div>
        <div class="d-flex flex-row-reverse">
          <button class="btn btn-outline-info btn-add" onClick={() => showPopup(ADD_NEW_CERTIFICATE, true)}>Add</button>
        </div>
      </div>
    </div>
  )
}