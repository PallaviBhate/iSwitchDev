import React from 'react'
import { EDIT_PROFILE_NAME, EDIT_ABOUT } from '../../../../../Utils/AppConst'

export const About = ({showPopup}) => {
  return (
    <div class="bg-white px-4 py-4 section-divider align-items-center">
      <div class="col">
        <div class="mb-4 align-items-center">
          <img src="/images/Dashboard-assets/iconfinder_edit.svg" class="float-right" alt="Cinque Terre" onClick={() => showPopup(EDIT_ABOUT, true)} />
          <img src="/images/Dashboard-assets/about-icon.svg" alt="Cinque Terre" class="mr-2" />
          <span class="subtitle-semi-bold">About</span>
        </div>
        <div class="pl-4 pr-4">
          <p class="normal-text-light mb-0 pr-4">Senior Python Developer responsibilities include participating in all phases of the software development lifecycle and coaching junior developers. If you’re a seasoned developer with a love for back-end technologies, we’d like to meet you..</p>
        </div>
      </div>
    </div>
  )
}