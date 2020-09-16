import React from 'react'
import { ADD_NEW_EMPLOYMENT, EDIT_EMPLOYMENT } from '../../../../../Utils/AppConst'

export const Employment = ({showPopup}) => {
  return (
    <div class="bg-white px-4 py-4 section-divider align-items-center">
      <div class="col">
        <div class="mb-4 align-items-center">
          <img src="/images/Dashboard-assets/employment-icon.svg" alt="Cinque Terre" class="mr-2" />
          <span class="subtitle-semi-bold">Employment</span>
        </div>
        <div class="px-4 mb-3">
          {[1, 2, 2].map(i => (
            <div class="col-12 px-0 py-3">
              <div>
                <img src="/images/Dashboard-assets/iconfinder_edit.svg" class="float-right" alt="Cinque Terre" onClick={() => showPopup(EDIT_EMPLOYMENT, true)} />
                <span class="subtitle-semi-bold">Software Developer</span>
              </div>
              <div><span class="normal-text-semi-bold">TCS Pune Full time</span></div>
              <div><span class="normal-text-light">Sept 2008 - Present 2 years</span></div>
              <p class="normal-text-light">Quisque congue dignissim efficitur. Vestibulum ultrices pulvinar ex, a dignissim neque tincidunt sed.</p>
            </div>
          ))}
        </div>
        <div class="d-flex flex-row-reverse">
          <button class="btn btn-outline-info btn-add" onClick={() => showPopup(ADD_NEW_EMPLOYMENT, true)}>Add</button>
        </div>
      </div>
    </div>
  )
}